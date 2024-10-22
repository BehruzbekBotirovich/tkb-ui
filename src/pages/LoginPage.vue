<script setup>
import { RightOutlined } from '@ant-design/icons-vue';


</script>

<template>
  <section class="login">
    <div class="login-aside">
      <div class="flex justify-center items-center mt-6">
        <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.5005 27.1995C12.6983 27.3762 12.9981 27.1837 12.9239 26.9292L9.5646 15.4116C9.50205 15.1971 9.31244 15.0445 9.08963 15.0281C8.54597 14.9882 8.00257 14.9435 7.45949 14.8942L2.96559 14.4856C2.75579 14.4665 2.60811 14.6866 2.70744 14.8724C5.1382 19.4188 8.63847 23.7508 12.5005 27.1995Z"
            fill="#005CE8" />
          <path
            d="M15.7962 29.6343C15.8233 29.7272 15.9032 29.7971 16 29.7971C16.0968 29.7971 16.1768 29.7272 16.2039 29.6343L20.3157 15.5365C20.367 15.3608 20.23 15.1869 20.0472 15.1947C17.3503 15.3105 14.6498 15.3105 11.9529 15.1947C11.7701 15.1869 11.6331 15.3608 11.6844 15.5365L15.7962 29.6343Z"
            fill="#005CE8" />
          <path
            d="M19.0762 26.9291C19.0019 27.1837 19.3018 27.3762 19.4996 27.1995C23.3616 23.7508 26.8619 19.4188 29.2926 14.8724C29.392 14.6866 29.2443 14.4665 29.0345 14.4856L24.5406 14.8942C23.9975 14.9435 23.4541 14.9882 22.9105 15.0281C22.6877 15.0445 22.498 15.1971 22.4355 15.4116L19.0762 26.9291Z"
            fill="#005CE8" />
          <path
            d="M29.068 12.4743C29.2712 12.4559 29.3792 12.2253 29.2634 12.0574L24.9463 5.79764C24.573 5.25633 23.9575 4.93311 23.2999 4.93311H19.9804C19.7909 4.93311 19.6619 5.12521 19.7335 5.30063L22.7425 12.6651C22.83 12.8792 23.0454 13.0127 23.276 12.9944C23.6373 12.9659 23.9985 12.9352 24.3595 12.9024L29.068 12.4743Z"
            fill="#005CE8" />
          <path
            d="M17.5535 5.26131C17.4706 5.06257 17.2765 4.93311 17.0611 4.93311H14.9389C14.7236 4.93311 14.5294 5.06257 14.4466 5.26131L11.3032 12.8055C11.2323 12.9756 11.3513 13.1646 11.5354 13.1736C14.5101 13.3176 17.49 13.3176 20.4646 13.1736C20.6488 13.1646 20.7677 12.9756 20.6969 12.8055L17.5535 5.26131Z"
            fill="#005CE8" />
          <path
            d="M12.2666 5.30063C12.3382 5.12521 12.2092 4.93311 12.0197 4.93311H8.70017C8.04261 4.93311 7.42706 5.25633 7.05374 5.79764L2.73669 12.0574C2.62086 12.2253 2.72888 12.4559 2.93207 12.4743L7.64056 12.9024C8.00161 12.9352 8.3628 12.9659 8.72412 12.9944C8.95464 13.0127 9.1701 12.8792 9.25756 12.6651L12.2666 5.30063Z"
            fill="#005CE8" />
        </svg>
        <span class="font-semibold text-3xl">TKB</span>
      </div>
      <div class="login-short-title">
        <p>
          Ta'lim kredit banking
        </p>
        <h1>
          Dashboard
        </h1>
      </div>
      <div>
      </div>
    </div>
    <div class="login-content">
      <div>
        <h2 class="login_title mb-3">Tizimga kirish </h2>
        <button @click="onLogin" type="button" class="login-btn py-2 px-3">
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M50.375 24.1222C50.375 19.7 50.375 17.489 49.7293 15.5096C49.1579 13.7582 48.2234 12.146 46.9862 10.7776C45.588 9.2309 43.6654 8.12537 39.8203 5.9143L36.5547 4.03646C32.7096 1.82539 30.787 0.719862 28.743 0.287149C26.9345 -0.0957163 25.0654 -0.0957163 23.2569 0.287149C21.213 0.719861 19.2904 1.82539 15.4453 4.03646L12.1797 5.91431C8.33457 8.12537 6.41201 9.2309 5.01378 10.7776C3.77662 12.146 2.84207 13.7582 2.27073 15.5096C1.625 17.489 1.625 19.7 1.625 24.1222L1.625 27.8778C1.625 32.3 1.625 34.511 2.27073 36.4904C2.84207 38.2418 3.77662 39.854 5.01378 41.2224C6.41201 42.7691 8.33457 43.8746 12.1797 46.0857L15.4453 47.9635C19.2904 50.1746 21.213 51.2801 23.2569 51.7128C25.0654 52.0957 26.9345 52.0957 28.743 51.7128C30.787 51.2801 32.7096 50.1746 36.5547 47.9635L39.8203 46.0857C43.6654 43.8746 45.588 42.7691 46.9862 41.2224C48.2234 39.854 49.1579 38.2418 49.7293 36.4904C50.375 34.511 50.375 32.3 50.375 27.8778V24.1222Z"
              fill="url(#paint0_linear_5_13703)" />
            <path
              d="M50.375 24.1222C50.375 19.7 50.375 17.489 49.7293 15.5096C49.1579 13.7582 48.2234 12.146 46.9862 10.7776C45.588 9.2309 43.6654 8.12537 39.8203 5.9143L36.5547 4.03646C32.7096 1.82539 30.787 0.719862 28.743 0.287149C26.9345 -0.0957163 25.0654 -0.0957163 23.2569 0.287149C21.213 0.719861 19.2904 1.82539 15.4453 4.03646L12.1797 5.91431C8.33457 8.12537 6.41201 9.2309 5.01378 10.7776C3.77662 12.146 2.84207 13.7582 2.27073 15.5096C1.625 17.489 1.625 19.7 1.625 24.1222L1.625 27.8778C1.625 32.3 1.625 34.511 2.27073 36.4904C2.84207 38.2418 3.77662 39.854 5.01378 41.2224C6.41201 42.7691 8.33457 43.8746 12.1797 46.0857L15.4453 47.9635C19.2904 50.1746 21.213 51.2801 23.2569 51.7128C25.0654 52.0957 26.9345 52.0957 28.743 51.7128C30.787 51.2801 32.7096 50.1746 36.5547 47.9635L39.8203 46.0857C43.6654 43.8746 45.588 42.7691 46.9862 41.2224C48.2234 39.854 49.1579 38.2418 49.7293 36.4904C50.375 34.511 50.375 32.3 50.375 27.8778V24.1222Z"
              fill="url(#paint1_linear_5_13703)" />
            <path
              d="M45.2349 42.7732L36.9041 40.7137C36.1312 40.528 35.4437 40.0867 34.9529 39.4613C34.4622 38.8359 34.1971 38.0632 34.2005 37.2683V30.0097C32.4093 33.8216 29.6835 36.8397 25.8425 36.8397C21.7292 36.8397 18.897 33.3784 17.1218 29.1875V37.2848C17.1196 38.0776 16.8511 38.8467 16.3593 39.4685C15.8675 40.0903 15.181 40.5289 14.41 40.7137L6.57275 42.6296C7.84815 43.5948 9.57174 44.5859 12.1799 46.0857L15.4456 47.9635C19.2907 50.1746 21.2132 51.2801 23.2572 51.7128C25.0657 52.0957 26.9348 52.0957 28.7433 51.7128C30.7873 51.2801 32.7098 50.1746 36.5549 47.9635L39.8206 46.0857C42.2996 44.6602 43.9795 43.6942 45.2349 42.7732Z"
              fill="url(#paint2_linear_5_13703)" fill-opacity="0.7" />
            <path
              d="M36.9618 17.7829C36.9618 23.9236 33.7884 36.8398 25.8426 36.8398C17.8967 36.8398 14.7315 23.9236 14.7315 17.7829C14.7315 14.8317 15.9039 12.0013 17.9907 9.91451C20.0775 7.8277 22.9078 6.65533 25.859 6.65533C28.8103 6.65533 31.6406 7.8277 33.7274 9.91451C35.8142 12.0013 36.9866 14.8317 36.9866 17.7829H36.9618Z"
              fill="url(#paint3_linear_5_13703)" />
            <defs>
              <linearGradient id="paint0_linear_5_13703" x1="12.3196" y1="8.08991" x2="34.252" y2="47.566"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#B0ABB4" />
                <stop offset="1" stop-color="#464347" stop-opacity="0.4" />
              </linearGradient>
              <linearGradient id="paint1_linear_5_13703" x1="50.3751" y1="11.9834" x2="1.72339" y2="40.1858"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#1A9BFF" />
                <stop offset="1" stop-color="#0367FD" />
              </linearGradient>
              <linearGradient id="paint2_linear_5_13703" x1="33.2195" y1="65.1375" x2="21.1993" y2="29.143"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.17" stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
              <linearGradient id="paint3_linear_5_13703" x1="14.7233" y1="21.7558" x2="29.8155" y2="21.7558"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0.57" />
              </linearGradient>
            </defs>
          </svg>
          <b class="login-text">IMVID orqali davom etish </b>
          <RightOutlined class="text-gray text-sm" />
        </button>
      </div>
      <div class="login-footer">
        <p class="text-muted">© O'zbekiston Respublikasi Iqtisodiyoti va moliya vazirligi huzuridagi</p>
        <p class="text-muted">Аxborot texnologiyalari markazi</p>
      </div>
    </div>
  </section>

</template>

<style scoped lang="scss">
.login {
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #ede9fe;

  .login-short-title {
    font-weight: 600;
    font-size: 22px;
    line-height: 28px;
    width: 80%;
    margin: 0 auto;
  }

  &-aside {
    width: 460px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;

    background: {
      image: linear-gradient(45deg, #f1f1f1, rgba($purple, .05));
      repeat: no-repeat;
      position: bottom;
      size: contain;
    }

    ;
  }

  &-content {
    padding: 1rem;
    width: calc(100% - 460px);
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    .login-footer {
      position: absolute;
      bottom: 1rem;
      left: 0;
      right: 0;
    }
  }

  p {
    margin: .2rem 0;
    font-size: 14px;
    text-align: center;
  }

  &-btn {
    border: 1px solid rgba($muted, .2);
    border-radius: 20px;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 20px 12px -16px rgba($muted, 0.25);
    transition: all .25s;

    &:hover {
      border-color: transparent;
      background-color: rgba($primary, .07);
      box-shadow: none;
    }

    .login-icon {
      font-size: 52px;
      line-height: 52px;
    }

    .login-text {
      padding: 0 1rem;
      margin-right: 2rem;
    }
  }

  .login_title {
    font-size: 28px;
    font-weight: bold;
    text-align: center;
  }

  .text-center .logo {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>