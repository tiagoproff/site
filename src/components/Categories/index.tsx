import { useEffect, useState } from 'react';

import Section from 'layout/Section';
import Chip from '../Chip';

import categoryService from 'services/categoryService';

import { CategoriesComponent, CategoriesTitle } from './styles';
import Category from 'interfaces/Category';

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    categoryService
      .GetCategories()
      .then(({ data }) => console.log(setCategories(data)));
  }, []);

  return (
    <Section style={{ margin: '40px 0' }}>
      <CategoriesTitle>Categorias</CategoriesTitle>
      <CategoriesComponent>
        {categories.map((category) => (
          <Chip>{category}</Chip>
        ))}
      </CategoriesComponent>
    </Section>
  );
}
