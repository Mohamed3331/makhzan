import React from 'react'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Box, Container, ImageListItem, Grid, useMediaQuery } from '@mui/material'
import 'swiper/css'
import 'swiper/css/pagination'

interface IWarehouseGalleryProps {
  Images: Array<string>
}

const WarehouseGallery: React.FC<IWarehouseGalleryProps> = ({ Images }) => {
  const matches = useMediaQuery('(min-width:800px)')

  return (
    <>
      {matches ? (
        <Grid columnSpacing={{ xs: 1, sm: 2, md: 1 }} container>
          <Grid key={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }} container>
            <Grid item xs={8}>
              <ImageListItem>
                <img src={Images[0]} srcSet={Images[0]} alt={'fdsdsfds'} loading="lazy" />
              </ImageListItem>
            </Grid>
            <Grid item xs={4}>
              {Images.map((img, idx) => {
                if (idx > 0) {
                  return (
                    <ImageListItem key={idx}>
                      <img src={img} srcSet={img} alt={'fdsdsfds'} loading="lazy" />
                    </ImageListItem>
                  )
                }
              })}
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Box>
          <Swiper
            className="swiper-override-style2"
            modules={[Pagination]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop
          >
            {Images.map((image: string) => (
              <SwiperSlide>
                <img src={image} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      )}
    </>
  )
}

export default WarehouseGallery
