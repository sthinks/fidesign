<?php

namespace App\Http\Controllers;

use App\Category;
use App\Project;
use Illuminate\Http\Request;

class ServiceController extends Controller
{

    public function getAllCategories(Request $request){
        $acceptLanguage = $request->header('Accept-Language');
        $languageCode = explode(',', $acceptLanguage)[0];
        $languageCode = explode('-', $languageCode)[0];
    
        $categories = Category::withTranslations($languageCode)->get();
        $categories = $categories->translate($languageCode);
    
        $categories->map(function ($category) use ($languageCode) {
            $category->image = url(
                sprintf('storage/%s', str_replace('\\', '/', $category->image))
            );
           
            if ($category->projects) {
                
                $category->projects = $category->projects->map(function ($project) use ($languageCode) {
                    $project = $project->translate($languageCode);
                    
                    if($project->image)
                    {
                        $project->image = url(
                            sprintf('storage/%s', str_replace('\\', '/', $project->image))
                        ); 
                    }
                   
                    $project->image_gallery = collect($project->image_gallery)->map(function ($image) {
                         $data = json_decode($image);
                         for ($i=0; $i <count($data) ; $i++) { 
                            $data[$i] = url(
                                sprintf('storage/%s', str_replace('\\', '/', $data[$i]))
                            ); 
                         }
                         return $data;
                    });
                    return $project;
                });
            }
        });
    
        return response()->json($categories);
    }
    
    public function getAllProjects(Request $request){
        $acceptLanguage = $request->header('Accept-Language');
        $languageCode = explode(',', $acceptLanguage)[0];
        $languageCode = explode('-', $languageCode)[0];

        $projects = Project::withTranslations($languageCode)->with('category')->get();;
        $projects = $projects->translate($languageCode);
        
        $projects->map(function ($item) {
            $item->image = url(
                sprintf('storage/%s', str_replace('\\', '/', $item->image))
            );
            if($item->image_gallery != null)
           {
               $item->image_gallery = json_decode($item->image_gallery);
               $image_gallery = $item->image_gallery;
               for ($i=0; $i < count($image_gallery); $i++) {

                   $image_gallery[$i] = [
                       "url" =>  url(
                   sprintf('storage/%s', str_replace('\\', '/', $image_gallery[$i]))),
                       "index" => $i + 1 // Index 0'dan değil 1'den başlamalı
                   ];
               $item->image_gallery = $image_gallery;
               }
           }
        });
        
        return response()->json($projects);

    }
    public function getByProject($slug)
    {
        $project = Project::where('slug',$slug)->first();
        if($project->image)
        {   
            $project->image = url(
                sprintf('storage/%s', str_replace('\\', '/', $project->image))
            );
        }
        $projectGallery = json_decode($project->image_gallery);
        for ($i=0; $i <count($projectGallery) ; $i++) { 
            $projectGallery[$i] =  url(
                sprintf('storage/%s', str_replace('\\', '/', $projectGallery[$i]))
            );
        };
        $project->image_gallery=$projectGallery;

        return response()->json($project);
    }

}
