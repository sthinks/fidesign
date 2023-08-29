<?php

namespace App\Http\Controllers;

use App\Category;
use App\Project;
use Illuminate\Http\Request;

class ServiceController extends Controller
{

    public function getAllCategories(){
        
        $categories =   Category::all();
        $categories->map(function ($item) {
            $item->image = url(
                sprintf('storage/%s', str_replace('\\', '/', $item->image))
            );
        });
        return response()->json($categories);

    }

    public function getAllProjects(){
        
        $projects =   Project::with('category')->get();;
        $projects->map(function ($item) {
            $item->image = url(
                sprintf('storage/%s', str_replace('\\', '/', $item->image))
            );
        });

        return response()->json($projects);

    }

}
