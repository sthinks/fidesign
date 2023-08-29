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

        $categories->map(function ($item) {
            $item->image = url(
                sprintf('storage/%s', str_replace('\\', '/', $item->image))
            );
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
        });

        return response()->json($projects);

    }

}
