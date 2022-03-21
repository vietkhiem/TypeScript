import React from 'react'
import {Outlet} from 'react-router-dom';
type PropsType = {};

export default function AdminLayout() {
    return (
    <div>
        <header>Admin Page</header>
        <div className='row'>
            <div className='col-2'>
                <aside>Aside</aside>
            </div>
            <div className="col-10">
                <main>
                    Content
                    {/* Đây là phần có sự thay đổi khi render */}
                </main>
            </div>
        </div>
    </div>
)
};
