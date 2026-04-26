<?php

namespace App\Http\Requests\Permission;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePermissionRequest extends FormRequest
{
    // mengizinkan semua user melakukan request
    public function authorize(): bool
    {
        return true;
    }

    // validasi data yang masuk
    public function rules(): array
    {
        return [
            'permissions'                   => ['required', 'array'],
            'permissions.*.can_view'        => ['boolean'],
            'permissions.*.can_create'      => ['boolean'],
            'permissions.*.can_update'      => ['boolean'],
            'permissions.*.can_delete'      => ['boolean'],
        ];
    }
}