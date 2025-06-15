'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export interface BlogCategoryFilterProps {
  categories: { name: string; count: number }[];
}

export default function BlogCategoryFilter({ categories }: BlogCategoryFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Initialize selected categories from URL
  const initialSelected = searchParams.has('categories') 
    ? searchParams.get('categories')!.split(',') 
    : [];
  
  const [selectedCategories, setSelectedCategories] = useState<string[]>(initialSelected);

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    }
  };

  const applyFilters = () => {
    // Create new URLSearchParams
    const params = new URLSearchParams(searchParams);
    
    // Update categories parameter
    if (selectedCategories.length) {
      params.set('categories', selectedCategories.join(','));
    } else {
      params.delete('categories');
    }
    
    // Update the URL
    router.push(`/blog?${params.toString()}`);
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    
    // Remove categories parameter from URL
    const params = new URLSearchParams(searchParams);
    params.delete('categories');
    router.push(`/blog?${params.toString()}`);
  };

  return (
    <div>
      <div className="space-y-2 mb-4">
        {categories.map((category) => (
          <div key={category.name} className="flex items-center space-x-2">
            <Checkbox 
              id={`category-${category.name}`} 
              checked={selectedCategories.includes(category.name)}
              onCheckedChange={(checked) => 
                handleCategoryChange(category.name, checked as boolean)
              }
            />
            <Label
              htmlFor={`category-${category.name}`}
              className="text-sm cursor-pointer flex-1"
            >
              {category.name}
            </Label>
            <span className="text-xs text-muted-foreground">({category.count})</span>
          </div>
        ))}
      </div>
      
      <div className="flex space-x-2">
        <Button onClick={applyFilters} size="sm" className="w-full ">
          Apply
        </Button>
        {selectedCategories.length > 0 && (
          <Button onClick={clearFilters} variant="outline" size="sm">
            Clear
          </Button>
        )}
      </div>
    </div>
  );
}