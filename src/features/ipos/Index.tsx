import CustomSafeAreaView from '@components/global/CustomSafeAreaView';
import Tabs from '@components/tabs/Tabs';
import CustomHeader from '@components/ui/CustomHeader';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';

const Index = () => {
  const [categories, setCategories] = useState<any[]>([
    {_id: '1', name: 'Upcomming'},
    {_id: '2', name: 'Ongoing'},

    {_id: '3', name: 'Allotted'},
  ]);
  const [selectedCategory, setSelectedCategory] = useState<any>({
    _id: '1',
    name: 'Upcomming',
  });

  useEffect(() => {
    console.log('selectedCategory', selectedCategory);
  }, [selectedCategory]);
  return (
    <CustomSafeAreaView>
      <CustomHeader title={'All IPOs'} search={true} isBack={false} />
      <Tabs
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryPress={(category: any) => setSelectedCategory(category)}
      />
      <View>
        <Text>Ipos</Text>
      </View>
    </CustomSafeAreaView>
  );
};

export default Index;
