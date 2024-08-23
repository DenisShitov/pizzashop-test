<script setup>

</script>

<template>
    <div class="container">
        <Splide
            :options="{
                gap: 32,
                arrows: false,
                drag: false,
                perPage: 3,
                width: '100%',
                breakpoints: {
                    768: {
                        perPage: 1,
                    },
                }
            }"
            aria-label="Promo"
        >
            <SplideSlide>
                <div class="promo__item">
                    <div class="promo__image">
                        <img src="/images/Event%201.png" alt="">
                    </div>
                    <div class="promo__desc">
                        <h4>Закажи 2 пиццы – 3-я в подарок</h4>
                        <p class="description">При заказе 2-х больших пицц – средняя пицца в подарок</p>
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div class="promo__item">
                    <div class="promo__image">
                        <img src="/images/Event%202.png" alt="">
                    </div>
                    <div class="promo__desc">
                        <h4>Напиток в подарок</h4>
                        <p class="description">Скидка на заказ от 3 000 рублей + напиток в подарок</p>
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div class="promo__item">
                    <div class="promo__image">
                        <img src="/images/Event%203.png" alt="">
                    </div>
                    <div class="promo__desc">
                        <h4>25% при первом заказе</h4>
                        <p class="description">Скидка новым клиентам!</p>
                    </div>
                </div>
            </SplideSlide>
        </Splide>
    </div>

</template>