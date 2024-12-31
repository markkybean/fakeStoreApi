// components/Product.jsx
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Product = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 350, margin: 'auto'}}>
      <CardMedia
        component="img"
        alt={product.title}
        sx={{
          height: 200, // Set the height you want
          width: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          objectFit: 'cover', // Adjust fit if necessary
          margin: 'auto', // Center in the parent container
        }}
        image={product.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined">Buy Now</Button>
        <Button size="small" variant="outlined">Add To Cart</Button>
      </CardActions>
    </Card>
  );
};

export default Product;
