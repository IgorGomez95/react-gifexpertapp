import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

// rafc snippet 
const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Dragon Ball']);

    // const handleAdd = () => {
    //     setCategories( [...categories, 'nueva categoría'] );
    // };
    
    return (
        <>
            <h2>Gift Expert App</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>
        </>
    );
};

export default GifExpertApp;

