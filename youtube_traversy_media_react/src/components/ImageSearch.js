import React, {useState} from 'react';

const ImageSearch = ( {searchText} ) =>{
    // value
    const [text, setText] = useState('');
    
    //event
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(text);
        searchText(text);
    }

    const onChange = (e) => {
        console.log(e.target.value);
        setText(e.target.value);
    }
    //view
    const output = (        
        <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
            <form onSubmit = {onSubmit} className='w-full max-w-sm'>
                <div className='flex items-center border-b border-b-2 border-teal-500 py-2'>
                    <input onChange={onChange} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search Image Term..."/>
                    <button className="flex-shrink-0 bg-green-500 hover:bg-green-700 border-green-500 hover:border-green-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">Search</button>
                </div>
            </form>
        </div>
    )

    return output
}

export default ImageSearch;
