import { useState } from 'react';

export const useFilter = (initialData) => {
    const [query, setQuery] = useState("");

    const filteredData = initialData.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
    );

    return { query, setQuery, filteredData };
};