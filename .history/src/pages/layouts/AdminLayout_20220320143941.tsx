import React from 'react'

type PropsType = {};
export default function AdminLayout() {
    return (
    <>
        <header>Admin Page</header>
        <div className='row'>
            <div className='col-2'>
                <aside>Aside</aside>
            </div>
            <div className="col-10">
                <main>
                    Content
                </main>
            </div>
        </div>
    </>
)
}
