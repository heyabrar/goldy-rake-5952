import { Box, Button, Flex, Image, Text, Tooltip } from "@chakra-ui/react";
import { BsCartCheck } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import ConentForSingleRenderPage from "./ContentForSingleRenderPage";
import {MdErrorOutline} from 'react-icons/md'
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import Toast from "../Components/Toast";
    
export default function SinglePageRender ({data}){

    const {CartData,SetCartData} = useContext(CartContext);
    const key = Date.now( );
   
    const handleAddToCart = (data) =>{
        SetCartData([...CartData,data]);
    };
    return (
        <>
         <Flex key={key+data.id} w={{base : '100%', md : '90%' , lg : '50%'}}  m='auto' gap='30px' direction={{base : 'column', md : 'row'}}>
            <Box  m='auto' >
                <Image w={{base : '200px', md : '300px', lg : '400px'}} src={data.image}/>
            </Box>

            <Box  m='auto'  w='80%'>
                <Text fontSize={{base : '14px', md : '16px', lg : '18px'}} w={'90%'} fontWeight='550'>{data.title}</Text>
               <Flex color='#dd2985' gap='7px' mt={{base : '10px', md : '15px'}} fontSize={{base : '12px', md : '16px'}} alignItems='center'>
                    { data.stock ? <TiTick/> : <MdErrorOutline/> }
                    <Text> {data.stock || data.out_of_stock}</Text>
                </Flex>

                <Flex gap='10px' fontWeight='550' mt={{base : '10px', md : '15px'}}  fontSize={{base : '12px', md : '16px'}}>
                    <Text color='gray' textDecoration='line-through'>{data.offerPrice}</Text>
                    <Text color='#dd2985'>{data.price}</Text>
                    <Text color='green'>{data.off}</Text>
                </Flex>

                <Text  fontSize={{base : '12px', md : '16px'}} mt={{base : '10px', md : '15px'}} color='gray' fontWeight='550'>Brand : {data.brand}</Text>

                <Tooltip label="Add To Cart" aria-label='A tooltip'>
                    <Box  w={{base : '150px', md : '150px'}}>  
                        <Button onClick={( )=> handleAddToCart (data)} bg='#dd0285' size='sm' colorScheme='none' fontSize='20px'  className="AddToCartBtn" disabled={data.out_of_stock === 'Out of stock'}><Toast data={data}/></Button>
                    </Box>
                </Tooltip>
              
            </Box>
          </Flex>

          <ConentForSingleRenderPage/>

        </>
    )
}