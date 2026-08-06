import { createSlice } from '@reduxjs/toolkit';
import { ProductsState } from '../../model/data/productsState';

const initialState:ProductsState = {
  productList :[
    {
      id: 1,
      name: 'Watch',
      price: 40,
      image:
        'https://cdn.dsmcdn.com/mnresize/420/620/ty1155/product/media/images/prod/SPM/PIM/20240201/17/bec3cb83-4986-3808-8a84-65efbac731e3/1_org_zoom.jpg',
      category: 'Accessories',
      isFavorite: false,
      description:
        'Culpa aliquam consequuntur veritatis at consequuntur praesentium beatae temporibus nobis. Velit dolorem facilis neque autem. Itaque voluptatem expedita qui eveniet id veritatis eaque. Blanditiis quia placeat nemo. Nobis laudantium nesciunt perspiciatis sit eligendi.',
      size: [
        { size: 8, isHave: false },
        { size: 10, isHave: true },
        { size: 38, isHave: true },
        { size: 40, isHave: false },
      ],
    },
    {
      id: 2,
      name: 'Nike Shoes',
      price: 430,
      image:
        'https://cdn.dsmcdn.com/mnresize/420/620/ty1644/prod/QC/20250301/13/9d4a473e-c0df-3637-951d-2e7dc27bac8f/1_org_zoom.jpg',
      category: 'Footwear',
      isFavorite: false,
      description:
        'Culpa aliquam consequuntur veritatis at consequuntur praesentium beatae temporibus nobis. Velit dolorem facilis neque autem. Itaque voluptatem expedita qui eveniet id veritatis eaque. Blanditiis quia placeat nemo. Nobis laudantium nesciunt perspiciatis sit eligendi.',
      size: [
        { size: 8, isHave: true },
        { size: 10, isHave: true },
        { size: 38, isHave: true },
        { size: 40, isHave: false },
      ],
    },
    {
      id: 3,
      name: 'LG TV',
      price: 330,
      image:
        'https://cdn.dsmcdn.com/mnresize/420/620/ty1936/prod/QC_PREP/20260602/09/6ca37e9b-39ce-37db-a8e1-b094729c0568/1_org_zoom.jpg',
      category: 'Electronics',
      isFavorite: false,
      description:
        'Culpa aliquam consequuntur veritatis at consequuntur praesentium beatae temporibus nobis. Velit dolorem facilis neque autem. Itaque voluptatem expedita qui eveniet id veritatis eaque. Blanditiis quia placeat nemo. Nobis laudantium nesciunt perspiciatis sit eligendi.',
      size: [
        { size: 8, isHave: true },
        { size: 10, isHave: true },
        { size: 38, isHave: true },
        { size: 40, isHave: false },
      ],
    },
    {
      id: 4,
      name: 'Airpods',
      price: 333,
      image:
        'https://cdn.dsmcdn.com/mnresize/420/620/ty1814/prod/QC_ENRICHMENT/20260119/12/47202316-5e64-35ff-8bd4-e5dcf49544f4/1_org_zoom.jpg',
      category: 'Electronics',
      isFavorite: false,
      description:
        'Culpa aliquam consequuntur veritatis at consequuntur praesentium beatae temporibus nobis. Velit dolorem facilis neque autem. Itaque voluptatem expedita qui eveniet id veritatis eaque. Blanditiis quia placeat nemo. Nobis laudantium nesciunt perspiciatis sit eligendi.',
      size: [
        { size: 8, isHave: true },
        { size: 10, isHave: true },
        { size: 38, isHave: true },
        { size: 40, isHave: false },
      ],
    },
    {
      id: 5,
      name: 'Jacket',
      price: 50,
      image:
        'https://cdn.dsmcdn.com/mnresize/420/620/ty1471/product/media/images/prod/QC/20240807/19/bf6e6398-afb2-3fce-8e2a-9d64b5048106/1_org_zoom.jpg',
      category: 'Clothing',
      isFavorite: false,
      description:
        'Culpa aliquam consequuntur veritatis at consequuntur praesentium beatae temporibus nobis. Velit dolorem facilis neque autem. Itaque voluptatem expedita qui eveniet id veritatis eaque. Blanditiis quia placeat nemo. Nobis laudantium nesciunt perspiciatis sit eligendi.',
      size: [
        { size: 8, isHave: true },
        { size: 10, isHave: true },
        { size: 38, isHave: true },
        { size: 40, isHave: false },
      ],
    },
    {
      id: 6,
      name: 'Hoodie',
      price: 400,
      image:
        'https://cdn.dsmcdn.com/mnresize/420/620/ty1845/prod/QC_PREP/20260330/14/d1a2ed1c-5562-32e2-9d60-fdad3a296345/1_org_zoom.jpg',
      category: 'Clothing',
      isFavorite: false,
      description:
        'Culpa aliquam consequuntur veritatis at consequuntur praesentium beatae temporibus nobis. Velit dolorem facilis neque autem. Itaque voluptatem expedita qui eveniet id veritatis eaque. Blanditiis quia placeat nemo. Nobis laudantium nesciunt perspiciatis sit eligendi.',
      size: [
        { size: 8, isHave: true },
        { size: 10, isHave: true },
        { size: 38, isHave: true },
        { size: 40, isHave: false },
      ],
    },
    {
      id: 7,
      name: 'Skull Tee',
      price: 35,
      image:
        'https://cdn.dsmcdn.com/mnresize/420/620/ty1373/product/media/images/prod/QC/20240620/16/f42d54fa-f282-3269-b95b-9a1884535fc9/1_org_zoom.jpg',
      category: 'Clothing',
      isFavorite: false,
      description:
        'Culpa aliquam consequuntur veritatis at consequuntur praesentium beatae temporibus nobis. Velit dolorem facilis neque autem. Itaque voluptatem expedita qui eveniet id veritatis eaque. Blanditiis quia placeat nemo. Nobis laudantium nesciunt perspiciatis sit eligendi.',
      size: [
        { size: 8, isHave: true },
        { size: 10, isHave: true },
        { size: 38, isHave: true },
        { size: 40, isHave: false },
      ],
    },
    {
      id: 8,
      name: 'Love Will Save Us Sweatshirt',
      price: 45,
      image:
        'https://cdn.dsmcdn.com/mnresize/420/620/ty1913/prod/QC_PREP/20260608/15/fa326ac4-75e3-35e3-8ed7-176a98df2ee0/1_org_zoom.jpg',
      category: 'Clothing',
      isFavorite: false,
      description:
        'Culpa aliquam consequuntur veritatis at consequuntur praesentium beatae temporibus nobis. Velit dolorem facilis neque autem. Itaque voluptatem expedita qui eveniet id veritatis eaque. Blanditiis quia placeat nemo. Nobis laudantium nesciunt perspiciatis sit eligendi.',
      size: [
        { size: 8, isHave: true },
        { size: 10, isHave: true },
        { size: 38, isHave: true },
        { size: 40, isHave: false },
      ],
    },
  ],
};
const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers:{}
});

export const {} =productSlice.actions
export default productSlice.reducer