import React from 'react';

const Bannerbottom = () => {
    const arr = [
        {
            icon : 5,
            title : "Fast Shipping",
            description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium id minima dolores accusamus illum illo placeat, quidem repudiandae recusandae similique!"
        },
        {
            icon : 8,
            title : "Best Quality",
            description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium id minima dolores accusamus illum illo placeat, quidem repudiandae recusandae similique!"
        },{
            icon : 12,
            title : "Best Offer",
            description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium id minima dolores accusamus illum illo placeat, quidem repudiandae recusandae similique!"
        },{
            icon : 16,
            title : "Secure Payment",
            description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium id minima dolores accusamus illum illo placeat, quidem repudiandae recusandae similique!"
        }
    ]
    return (
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10'>
            {
                arr.map(part => <div className='p-7 flex shadow-xl flex-col justify-center gap-2'>
                    <div className='text-center'>
                        {part.icon}
                    </div>
                    <h1 className='text-center'>
                        {part.title}
                    </h1>
                    <p className='text-center'>
                        {part.description}
                    </p>
                </div>)
            }
        </div>
    );
};

export default Bannerbottom;