import { Roboto } from 'next/font/google';


const roboto = Roboto({
    weight: ['400', '500', '700'], // Different font weights
    subsets: ['latin'], // Latin subset for language support
    style :['normal', 'italic'] ,          
    display: 'swap',    // Font display strategy for better performance
  });
  
  export default roboto; 