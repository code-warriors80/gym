import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";

const Services1 = () => {
               const responsive = {
                              superLargeDesktop: {
                                // the naming can be any, depends on you.
                                breakpoint: { max: 4000, min: 3000 },
                                items: 5
                              },
                              desktop: {
                                breakpoint: { max: 3000, min: 1024 },
                                items: 3
                              },
                              tablet: {
                                breakpoint: { max: 1024, min: 464 },
                                items: 1
                              },
                              mobile: {
                                breakpoint: { max: 464, min: 0 },
                                items: 1
                              }
               };
  return (
               <div className='lg:w-[75%] w-[100%] mx-auto'>
               <Carousel responsive={responsive} autoPlay={true}  swipeable={true} draggable={true} infinite={true} arrows={false} autoPlaySpeed={5000} transitionDuration={700} className='text-black flex items-center justify-between gap-5 py-10 mt-10'>
                                             <div className='bg-[#F6F6F7] mx-5 py-10 px-10  rounded-xl overflow-hidden hover:bg-white hover:shadow-xl transition-all'>
                                                            <div className='bg-white rounded-xl w-max py-5 px-4'><svg xmlns="http://www.w3.org/2000/svg" width="82" height="55" viewBox="0 0 63 55" fill="none"><path d="M39.5394 30.8149L33.6811 28.1101C30.1205 26.4646 25.6186 28.206 22.3666 32.0661L17.2539 29.2718C16.1193 28.7441 14.5219 29.7101 13.7633 31.3465C13.3952 32.1045 13.262 32.9552 13.3808 33.7894C13.4122 34.1071 13.5198 34.4127 13.6945 34.6799C13.8693 34.9472 14.1059 35.1684 14.3844 35.3246L19.1185 37.9179C17.1592 43.828 18.6296 49.7394 22.8035 51.6624L28.6605 54.3659C29.5786 54.7879 30.5779 55.0043 31.5883 54.9999C33.2727 54.9609 34.9154 54.4681 36.3431 53.5736C39.0555 51.8678 41.1945 49.3882 42.4841 46.455C45.4832 39.9705 44.1619 32.9465 39.5394 30.8149ZM15.3491 33.6428C15.3248 33.586 15.3078 33.5263 15.2986 33.4652C15.2496 33.0199 15.3293 32.57 15.5281 32.1686C15.7102 31.6972 16.0597 31.3094 16.5096 31.0794L21.1853 33.6377C20.6837 34.3959 20.2398 35.1908 19.8576 36.0157C19.8472 36.0403 19.8381 36.065 19.8264 36.0896L15.3491 33.6428ZM21.6236 36.8365C24.1728 31.3167 29.2142 28.1969 32.8668 29.88L34.3022 30.5439C33.4454 30.7942 32.6238 31.1519 31.8567 31.6084C29.1444 33.3137 27.0054 35.7928 25.7158 38.7257C24.32 41.6101 23.8197 44.8463 24.2791 48.0175C24.4304 48.8969 24.6918 49.7538 25.0571 50.568L23.6308 49.9067C19.9704 48.2159 19.0744 42.3524 21.6236 36.8365ZM40.7193 45.6537C39.594 48.2289 37.7246 50.4089 35.3512 51.9139C34.5048 52.5045 33.5257 52.8769 32.5008 52.9982C31.4759 53.1194 30.4369 52.9857 29.4761 52.6089C28.5662 52.1209 27.7909 51.4159 27.2189 50.5563C26.6468 49.6968 26.2958 48.7094 26.1969 47.6816C25.8027 44.8988 26.2497 42.0616 27.4806 39.5348C28.6053 36.9592 30.4748 34.779 32.8487 33.2746C33.9769 32.5627 35.2755 32.1664 36.609 32.1271C37.3366 32.1227 38.0564 32.2767 38.7186 32.5783C42.3726 34.2652 43.2685 40.1287 40.7193 45.6537Z" fill="black"></path><path d="M16.1414 42.4186C15.3859 42.8076 14.5546 43.0269 13.7055 43.0611C12.8565 43.0954 12.0102 42.9438 11.2258 42.6169C9.11484 41.6419 7.82986 39.1484 7.78967 35.9457C7.78626 35.69 7.6823 35.446 7.50029 35.2664C7.31828 35.0868 7.07287 34.9862 6.81718 34.9862H6.80421C6.6765 34.9879 6.55037 35.0147 6.43303 35.0651C6.31569 35.1156 6.20944 35.1886 6.12034 35.2802C6.03123 35.3717 5.96103 35.4798 5.91374 35.5985C5.86644 35.7171 5.84298 35.8439 5.8447 35.9716C5.8481 37.559 6.1801 39.1284 6.81977 40.5812L5.36753 39.9121C4.45764 39.424 3.68222 38.719 3.10999 37.8595C2.53776 37 2.18638 36.0126 2.08701 34.9849C1.69385 32.2019 2.14132 29.3649 3.37199 26.838C4.49709 24.2627 6.36653 22.0826 8.74011 20.5778C9.5867 19.9883 10.5655 19.6164 11.5899 19.495C12.6144 19.3735 13.653 19.5063 14.6139 19.8815C14.6333 19.8913 14.6532 19.8999 14.6736 19.9075L16.083 20.5558C14.1567 21.242 12.395 22.3232 10.9108 23.7299C9.4266 25.1366 8.25266 26.8379 7.46421 28.7247C6.89761 29.9443 6.47047 31.224 6.1909 32.5394C6.1375 32.7916 6.18644 33.0548 6.32698 33.2709C6.46752 33.4871 6.68815 33.6386 6.94036 33.6921C7.00733 33.706 7.07555 33.713 7.14394 33.7129C7.36661 33.7126 7.58243 33.6358 7.75522 33.4953C7.92802 33.3549 8.0473 33.1593 8.09308 32.9414C8.34314 31.7687 8.72415 30.6278 9.22895 29.5403C11.7782 24.0217 16.8208 20.8942 20.4722 22.585C21.4219 23.0996 22.2252 23.847 22.8068 24.7572C23.3883 25.6674 23.729 26.7105 23.7968 27.7885C23.815 27.9149 23.8579 28.0365 23.9232 28.1464C23.9884 28.2562 24.0746 28.3521 24.1769 28.4286C24.2792 28.5051 24.3955 28.5608 24.5193 28.5923C24.6431 28.6239 24.7719 28.6307 24.8983 28.6125C25.0247 28.5943 25.1463 28.5513 25.2562 28.4861C25.366 28.4209 25.4619 28.3347 25.5384 28.2324C25.6149 28.1301 25.6706 28.0138 25.7021 27.89C25.7337 27.7662 25.7405 27.6374 25.7223 27.511C25.6056 26.1126 25.138 24.7663 24.3629 23.5965C23.5878 22.4268 22.5301 21.4715 21.2878 20.819L15.4321 18.1129C15.411 18.1027 15.3893 18.0936 15.3673 18.0857C14.1273 17.5884 12.7843 17.4029 11.456 17.5453C10.1277 17.6877 8.85454 18.1538 7.74817 18.9026C5.03617 20.6083 2.89727 23.0872 1.60725 26.0199C-1.3919 32.5225 -0.0719082 39.5439 4.55194 41.6795L10.4102 44.383C11.3252 44.8009 12.3204 45.0142 13.3264 45.008C14.5734 44.9935 15.8034 44.7165 16.9362 44.195C17.1718 44.0896 17.3558 43.8949 17.4479 43.6538C17.5399 43.4127 17.5324 43.1449 17.427 42.9093C17.3216 42.6738 17.1269 42.4897 16.8858 42.3977C16.6447 42.3056 16.3769 42.3132 16.1414 42.4186Z" fill="black"></path><path d="M45.7036 36.0092C45.4457 36.0123 45.1996 36.1178 45.0194 36.3023C44.8392 36.4869 44.7397 36.7355 44.7428 36.9934C44.7459 37.2513 44.8513 37.4974 45.0359 37.6776C45.2205 37.8578 45.4691 37.9573 45.727 37.9542H45.7568C47.0243 37.9225 48.26 37.5506 49.3345 36.8775C50.4089 36.2044 51.2827 35.2548 51.8642 34.1281C52.4458 33.0014 52.7137 31.7391 52.64 30.4733C52.5663 29.2076 52.1536 27.9849 51.4452 26.9334C50.7368 25.8818 49.7588 25.04 48.6134 24.4962C47.4681 23.9523 46.1976 23.7264 44.935 23.8421C43.6723 23.9577 42.464 24.4107 41.4365 25.1536C40.4091 25.8965 39.6002 26.9019 39.0946 28.0647C38.9915 28.3011 38.9864 28.5688 39.0807 28.809C39.1749 29.0491 39.3607 29.2419 39.5971 29.3451C39.8335 29.4483 40.1012 29.4533 40.3414 29.3591C40.5815 29.2648 40.7744 29.0791 40.8775 28.8427C41.2439 27.9997 41.8303 27.2707 42.5751 26.7321C43.3199 26.1935 44.1958 25.865 45.1111 25.781C46.0264 25.697 46.9475 25.8607 47.7779 26.2548C48.6083 26.649 49.3174 27.2591 49.8311 28.0213C50.3448 28.7836 50.6441 29.6699 50.6977 30.5875C50.7513 31.5051 50.5572 32.4202 50.1358 33.2371C49.7144 34.054 49.0811 34.7425 48.3023 35.2307C47.5234 35.7188 46.6277 35.9886 45.7088 36.0118L45.7036 36.0092Z" fill="black"></path><path d="M60.5762 4.82097C59.6347 3.34007 58.3338 2.12145 56.7946 1.27853C55.2555 0.435612 53.5281 -0.00420093 51.7732 3.02426e-05H39.4875C37.7336 0.000319582 36.0081 0.442216 34.4699 1.28497C32.9318 2.12772 31.6306 3.34419 30.6864 4.82221C29.7422 6.30022 29.1853 7.99219 29.0672 9.74208C28.949 11.492 29.2734 13.2434 30.0103 14.835L33.2895 21.9134C32.544 22.9352 31.9277 24.0454 31.4548 25.2185C31.365 25.4566 31.3722 25.7203 31.4747 25.9532C31.5771 26.1861 31.7668 26.3695 32.0029 26.4642C32.2391 26.5589 32.5029 26.5572 32.7379 26.4596C32.9728 26.362 33.1602 26.1762 33.2597 25.9421C33.7268 24.7806 34.3545 23.6903 35.1243 22.703C35.135 22.6906 35.1449 22.6776 35.1541 22.6641C36.0147 21.5668 37.0441 20.6131 38.2038 19.8387C38.2116 19.8387 38.2155 19.8284 38.2233 19.8258C39.7014 18.8512 41.3595 18.1822 43.1 17.8581C44.8405 17.5341 46.6283 17.5615 48.3581 17.9389C50.0879 18.3162 51.7247 19.0358 53.1721 20.0553C54.6196 21.0748 55.8484 22.3735 56.7864 23.8751C57.7243 25.3767 58.3523 27.0508 58.6334 28.7988C58.9146 30.5468 58.8431 32.3333 58.4234 34.0533C58.0036 35.7733 57.244 37.3919 56.1892 38.8138C55.1344 40.2358 53.8058 41.4323 52.2815 42.333H45.6271C45.3692 42.333 45.1219 42.4354 44.9395 42.6178C44.7571 42.8002 44.6547 43.0475 44.6547 43.3055C44.6547 43.5634 44.7571 43.8107 44.9395 43.9931C45.1219 44.1755 45.3692 44.2779 45.6271 44.2779H52.537C52.7041 44.2765 52.8681 44.2318 53.0128 44.1483C54.8812 43.1049 56.5076 41.678 57.7854 39.9614C59.0631 38.2448 59.9633 36.2773 60.4267 34.1882C60.89 32.099 60.9062 29.9354 60.4741 27.8396C60.042 25.7437 59.1713 23.763 57.9194 22.0275L61.2517 14.8337C61.9927 13.2432 62.3193 11.4911 62.2012 9.74048C62.083 7.98984 61.5241 6.29753 60.5762 4.82097ZM59.487 14.0168L56.5436 20.3704C55.958 19.7627 55.323 19.2045 54.6453 18.7016L57.2866 12.9963C57.7154 12.0707 57.9042 11.0519 57.8355 10.0341C57.7668 9.01625 57.4428 8.03212 56.8934 7.17252C56.344 6.31292 55.587 5.60556 54.6921 5.11571C53.7972 4.62586 52.7934 4.36931 51.7732 4.36973H50.5544C50.2965 4.36973 50.0491 4.47219 49.8668 4.65457C49.6844 4.83694 49.5819 5.0843 49.5819 5.34222C49.5819 5.60014 49.6844 5.84749 49.8668 6.02987C50.0491 6.21225 50.2965 6.3147 50.5544 6.3147H51.7694C52.4632 6.31411 53.1459 6.48838 53.7546 6.82141C54.3632 7.15444 54.8781 7.63549 55.2517 8.22011C55.6253 8.80474 55.8456 9.47409 55.8921 10.1663C55.9386 10.8586 55.81 11.5514 55.518 12.1807L53.0025 17.6202C50.7498 16.3549 48.2116 15.6848 45.6279 15.6732C43.0442 15.6617 40.5002 16.309 38.2363 17.554L35.7467 12.1807C35.4547 11.5515 35.3261 10.8588 35.3725 10.1666C35.419 9.47452 35.6391 8.80525 36.0126 8.22066C36.386 7.63607 36.9008 7.155 37.5092 6.82188C38.1177 6.48876 38.8003 6.31433 39.494 6.3147H47.6512C47.9091 6.3147 48.1565 6.21225 48.3389 6.02987C48.5212 5.84749 48.6237 5.60014 48.6237 5.34222C48.6237 5.0843 48.5212 4.83694 48.3389 4.65457C48.1565 4.47219 47.9091 4.36973 47.6512 4.36973H39.4875C38.4674 4.37 37.4637 4.62712 36.5691 5.11738C35.6745 5.60764 34.9177 6.31524 34.3686 7.17496C33.8194 8.03468 33.4955 9.01882 33.4268 10.0366C33.3581 11.0545 33.5468 12.0732 33.9755 12.9989L36.5765 18.6121C35.8965 19.1099 35.2594 19.6638 34.6718 20.2679L31.7764 14.0155C31.1759 12.7205 30.9113 11.295 31.007 9.87073C31.1027 8.44646 31.5557 7.06925 32.3241 5.86621C33.0925 4.66317 34.1515 3.67307 35.4035 2.9873C36.6555 2.30152 38.06 1.94217 39.4875 1.94241H51.7732C53.2007 1.94218 54.6051 2.30144 55.8571 2.98705C57.1091 3.67267 58.1682 4.66255 58.9368 5.86536C59.7054 7.06818 60.1587 8.4452 60.2548 9.86936C60.351 11.2935 60.0869 12.719 59.487 14.0142V14.0168Z" fill="black"></path></svg></div>
                                                            <h2 className='lg:text-[22px] text-[19px] font-bold pt-5'>Body Building</h2>  
                                                            <p className='py-3 lg:text-[18px] text-[#7B7E86]'>Building Muscles increases your resting metabolic reat, which can aid in weight management a fat lose</p>
                                                            <Link className='flex items-center gap-4 text-black font-bold uppercase'><FaArrowRight /> Read More</Link>
                                             </div>
                                             <div className='bg-[#F6F6F7] mx-5 py-10 px-10  rounded-xl overflow-hidden hover:bg-white hover:shadow-xl transition-all'>
                                                            <div className='bg-white rounded-xl w-max py-5 px-4'><svg xmlns="http://www.w3.org/2000/svg" width="82" height="55" viewBox="0 0 52 55" fill="none"><path d="M16.6964 27.5C16.1543 27.5 15.7143 27.94 15.7143 28.4821V49.1071H0.982143C0.44 49.1071 0 49.5471 0 50.0893C0 50.6314 0.44 51.0714 0.982143 51.0714H15.7143V53.0357H12.7679C12.2257 53.0357 11.7857 53.4757 11.7857 54.0179C11.7857 54.56 12.2257 55 12.7679 55H30.4464C30.9886 55 31.4286 54.56 31.4286 54.0179C31.4286 53.4757 30.9886 53.0357 30.4464 53.0357H27.5V45.1786H41.25V53.0357H40.2679C39.7257 53.0357 39.2857 53.4757 39.2857 54.0179C39.2857 54.56 39.7257 55 40.2679 55H48.125C48.6671 55 49.1071 54.56 49.1071 54.0179C49.1071 53.4757 48.6671 53.0357 48.125 53.0357H47.1429V45.1786H50.0893C50.6314 45.1786 51.0714 44.7386 51.0714 44.1964V40.2679C51.0714 39.7257 50.6314 39.2857 50.0893 39.2857H48.9264C49.0364 38.9773 49.1071 38.6493 49.1071 38.3036C49.1071 36.6791 47.7852 35.3571 46.1607 35.3571H27.5V28.4821C27.5 27.94 27.06 27.5 26.5179 27.5H25.5357V2.80107L33.8034 2.21571C33.548 2.73429 33.3929 3.31179 33.3929 3.92857C33.3929 6.09518 35.1548 7.85714 37.3214 7.85714C38.0404 7.85714 38.7063 7.64893 39.2857 7.31107V15.9755L30.4346 21.2555C29.9691 21.5325 29.8159 22.1355 30.0929 22.603C30.2775 22.9114 30.6036 23.0823 30.9375 23.0823C31.1104 23.0823 31.2832 23.0371 31.4404 22.9429L40.2207 17.7061L45.9191 21.7545C46.092 21.8782 46.2904 21.9352 46.4888 21.9352C46.7952 21.9352 47.0996 21.7918 47.2882 21.5227C47.6025 21.0807 47.4984 20.4679 47.0584 20.1536L41.25 16.0246C41.25 16.0246 41.25 4.00714 41.25 3.92857C41.25 1.76196 39.488 0 37.3214 0C37.3038 0 37.288 0.0058929 37.2704 0.0058929C37.2645 0.0058929 37.2586 0.00392876 37.2527 0.00392876L9.75268 1.96821C9.74482 1.96821 9.73696 1.97411 9.72911 1.97411C7.60768 2.02518 5.89286 3.75768 5.89286 5.89286V27.828L0.681607 29.5114C0.275 29.643 0 30.0202 0 30.4464V46.1607C0 46.7029 0.44 47.1429 0.982143 47.1429H12.7679C13.31 47.1429 13.75 46.7029 13.75 46.1607V30.4464C13.75 30.028 13.4829 29.6548 13.088 29.5173L7.85714 27.718V9.27536C8.43661 9.61321 9.1025 9.82143 9.82143 9.82143C11.988 9.82143 13.75 8.05946 13.75 5.89286C13.75 5.08161 13.5025 4.32536 13.0782 3.69875L17.6786 3.37268V27.5H16.6964ZM17.6786 53.0357V29.4643H25.5357V53.0357H17.6786ZM45.1786 53.0357H43.2143V45.1786H45.1786V53.0357ZM49.1071 43.2143H27.5V41.25H49.1071V43.2143ZM46.1607 37.3214C46.7009 37.3214 47.1429 37.7614 47.1429 38.3036C47.1429 38.8457 46.7009 39.2857 46.1607 39.2857H27.5V37.3214H46.1607ZM39.2857 3.92857C39.2857 5.01089 38.4057 5.89286 37.3214 5.89286C36.2371 5.89286 35.3571 5.01089 35.3571 3.92857C35.3571 2.85018 36.2293 1.97607 37.3057 1.96821L37.3273 1.96625C38.4096 1.97018 39.2857 2.84821 39.2857 3.92857ZM11.7857 39.3132C11.7405 39.3054 11.7012 39.2857 11.6541 39.2857H2.46518C2.27857 39.2857 2.11357 39.3525 1.96429 39.4429V35.2C2.11357 35.2904 2.27857 35.3571 2.46518 35.3571H11.6541C11.7012 35.3571 11.7405 35.3375 11.7857 35.3296V39.3132ZM1.96429 45.1786V41.0929C2.11357 41.1832 2.27857 41.25 2.46518 41.25H11.6541C11.7012 41.25 11.7405 41.2304 11.7857 41.2225V45.1786H1.96429ZM11.7857 33.4204C11.7405 33.4125 11.7012 33.3929 11.6541 33.3929H2.46518C2.27857 33.3929 2.11357 33.4596 1.96429 33.55V31.1614L7.05179 29.5173L11.7857 31.1477V33.4204ZM9.82143 7.85714C8.73714 7.85714 7.85714 6.97518 7.85714 5.89286C7.85714 4.81054 8.73714 3.92857 9.82143 3.92857C10.9057 3.92857 11.7857 4.81054 11.7857 5.89286C11.7857 6.97518 10.9057 7.85714 9.82143 7.85714ZM19.6429 3.23125L23.5714 2.9425V27.5H19.6429V3.23125Z" fill="black"></path></svg></div>
                                                            <h2 className='lg:text-[22px] text-[19px] font-bold pt-5'>Gym Fitness Class</h2>
                                                            <p className='py-3 lg:text-[18px]  text-[#7B7E86]'>Our Gym is a judgment-free zone, and our members are like family , motivating and inspiring eachother</p>
                                                            <Link className='flex items-center gap-4 text-black font-bold uppercase'><FaArrowRight /> Read More</Link>
                                             </div>
                                             <div className='bg-[#F6F6F7] mx-5  py-10 px-10 rounded-xl overflow-hidden hover:bg-white hover:shadow-xl transition-all'>
                                                            <div className='bg-white rounded-xl w-max py-5 px-4'><svg xmlns="http://www.w3.org/2000/svg" width="82" height="55" viewBox="0 0 54 55" fill="none"><path d="M42.7891 18.0163C42.9679 18.195 43.2016 18.284 43.4353 18.284C43.6691 18.284 43.9032 18.1946 44.082 18.0163L50.4509 11.6473C52.2754 9.82241 52.2754 6.85278 50.4509 5.02787C48.626 3.20254 45.656 3.20338 43.8315 5.02787L43.4353 5.42315L43.0401 5.02787C41.2143 3.20296 38.2455 3.20296 36.4206 5.02787C35.5365 5.912 35.0493 7.08735 35.0493 8.33739C35.0493 9.58743 35.5365 10.7632 36.4206 11.6469L42.7891 18.0163ZM37.7135 6.32071C38.2699 5.7643 39 5.48693 39.7301 5.48693C40.4603 5.48693 41.1912 5.76472 41.7472 6.32071L42.7891 7.36304C42.9608 7.53424 43.1932 7.63075 43.4353 7.63075C43.6779 7.63075 43.9104 7.53424 44.082 7.36304L45.1243 6.32071C46.2371 5.20747 48.0461 5.20873 49.1581 6.32071C50.2701 7.43269 50.2701 9.2425 49.1581 10.3545L43.4353 16.0768L37.7135 10.3545C37.1747 9.8157 36.8776 9.09899 36.8776 8.33781C36.878 7.57578 37.1747 6.85908 37.7135 6.32071Z" fill="black"></path><path d="M52.0081 53.0291C44.1936 53.896 37.9963 50.4358 37.9342 50.401C37.7239 50.281 37.4747 50.2487 37.241 50.3129C37.1424 50.3393 27.3128 52.9741 19.3959 51.2167C14.4604 50.1194 9.80518 46.6429 6.40587 44.1047C5.94932 43.7639 5.5167 43.4404 5.11051 43.1437C4.55578 42.738 3.67374 42.4006 2.89619 42.1027C2.54707 41.9692 2.06871 41.7859 1.9659 41.7217C1.87694 41.652 1.82827 41.5496 1.82827 41.4325V39.3135C1.87233 37.6367 8.90258 11.8357 9.99275 8.55349C10.0196 8.51488 10.1245 8.43893 10.2017 8.40243L24.1145 2.04776L28.6124 7.9035C28.8344 8.20689 28.8134 8.63112 28.5633 8.911L24.1187 13.8935C23.8279 14.22 23.3382 14.2557 23.0344 14.0018L21.2372 12.3447C21.0266 12.1509 20.727 12.0867 20.4462 12.1383C20.1647 12.1886 19.9129 12.3892 19.7828 12.6443C19.6326 12.9402 18.2718 13.3027 16.8837 13.3132L16.4313 13.2675C16.0688 13.2242 15.7172 13.4135 15.5401 13.7328C15.3622 14.0521 15.3924 14.4466 15.6156 14.7361C16.0017 15.235 16.3025 15.6358 16.4729 15.8657L17.3625 30.9874C16.8111 33.135 16.3059 33.7452 16.1804 33.8673C15.8099 33.9843 15.5409 34.3305 15.5409 34.7392C15.5409 35.244 15.9505 35.6536 16.4553 35.6536C17.4921 35.6536 18.3733 34.2911 19.0808 31.6311C26.3523 26.1904 32.6982 31.3252 33.1959 31.7478C35.5054 34.0658 35.6485 35.6053 35.6531 35.6737C35.664 36.1689 36.069 36.5675 36.5675 36.5675C37.0723 36.5675 37.4818 36.1584 37.4818 35.6536C37.4818 35.4434 37.4055 33.6394 35.0392 31.0332C37.2708 28.2897 39.8115 26.7095 42.61 26.3654C47.4347 25.7712 51.4903 29.0157 51.531 29.048C51.9229 29.3669 52.4978 29.3081 52.8167 28.9171C53.1356 28.5264 53.0781 27.9515 52.6879 27.6322C52.4991 27.4782 48.0096 23.8666 42.4052 24.5484C39.1292 24.9458 36.1886 26.7174 33.6537 29.8184C31.5963 28.4194 25.6973 25.253 19.1001 29.3942L18.2819 15.4877C18.2735 15.3374 18.2273 15.1918 18.1488 15.0638C18.9671 14.9669 19.9414 14.7533 20.6481 14.2884L21.8259 15.3739C22.9224 16.2942 24.5283 16.1796 25.4825 15.1113L29.9271 10.1283C30.747 9.20977 30.8154 7.82084 30.0756 6.80789L25.1208 0.35712C24.8623 0.0201682 24.4049 -0.0943871 24.0159 0.082691L9.45312 6.73445C9.3008 6.80117 8.52829 7.17505 8.27442 7.93875C7.75661 9.49301 0 37.1554 0 39.3105V41.433C0 42.114 0.3059 42.7438 0.838394 43.1614C1.10485 43.3699 1.50307 43.5277 2.24285 43.8105C2.8471 44.0421 3.67416 44.3581 4.03126 44.6195C4.43325 44.9133 4.86042 45.2326 5.31193 45.57C8.84384 48.2077 13.6808 51.8197 18.9998 53.0018C26.5718 54.6845 35.4605 52.6502 37.3656 52.1701C38.6379 52.8277 43.3057 55 49.4166 55C50.3183 55 51.252 54.953 52.2099 54.846C52.7118 54.7906 53.0731 54.3383 53.0177 53.8368C52.9615 53.3341 52.5079 52.9699 52.0081 53.0291Z" fill="black"></path><path d="M47.5325 41.952C47.4821 41.4946 47.0948 41.1388 46.6236 41.1388C46.1188 41.1388 45.7092 41.5484 45.7092 42.0532C45.7092 42.6637 46.1603 44.7311 51.9586 45.6971C52.0094 45.7055 52.0601 45.7097 52.1097 45.7097C52.5486 45.7097 52.9359 45.3929 53.0106 44.946C53.0932 44.4479 52.7567 43.9771 52.259 43.8936C48.2043 43.218 47.5866 42.0737 47.5325 41.952Z" fill="black"></path><path d="M29.977 46.6442C18.0032 49.2089 12.8793 41.0163 12.6674 40.6667C12.406 40.235 11.8458 40.0961 11.414 40.3554C10.9809 40.6151 10.8408 41.1766 11.1005 41.6096C11.161 41.7099 12.6158 44.0979 15.7264 46.1322C17.8698 47.5333 21.1382 48.9609 25.5588 48.9609C27.0313 48.9609 28.6313 48.8027 30.3597 48.4326C30.8536 48.3268 31.1683 47.8405 31.0625 47.347C30.9564 46.8536 30.4709 46.5376 29.977 46.6442Z" fill="black"></path></svg></div>
                                                            <h2 className='lg:text-[22px] text-[19px] font-bold pt-5'>Power Lifting</h2>
                                                            <p className='py-3 lg:text-[18px] text-[#7B7E86]'>A fitness goal and building a well-developed physique can boost self-confidence and body image</p>
                                                            <Link className='flex items-center gap-4 text-black font-bold uppercase'><FaArrowRight /> Read More</Link>
                                             </div>
                                             <div className='bg-[#F6F6F7] mx-5 py-10 px-10  rounded-xl overflow-hidden hover:bg-white hover:shadow-xl transition-all'>
                                                            <div className='bg-white rounded-xl w-max py-5 px-4'><svg xmlns="http://www.w3.org/2000/svg" width="82" height="55" viewBox="0 0 52 55" fill="none"><path d="M16.6964 27.5C16.1543 27.5 15.7143 27.94 15.7143 28.4821V49.1071H0.982143C0.44 49.1071 0 49.5471 0 50.0893C0 50.6314 0.44 51.0714 0.982143 51.0714H15.7143V53.0357H12.7679C12.2257 53.0357 11.7857 53.4757 11.7857 54.0179C11.7857 54.56 12.2257 55 12.7679 55H30.4464C30.9886 55 31.4286 54.56 31.4286 54.0179C31.4286 53.4757 30.9886 53.0357 30.4464 53.0357H27.5V45.1786H41.25V53.0357H40.2679C39.7257 53.0357 39.2857 53.4757 39.2857 54.0179C39.2857 54.56 39.7257 55 40.2679 55H48.125C48.6671 55 49.1071 54.56 49.1071 54.0179C49.1071 53.4757 48.6671 53.0357 48.125 53.0357H47.1429V45.1786H50.0893C50.6314 45.1786 51.0714 44.7386 51.0714 44.1964V40.2679C51.0714 39.7257 50.6314 39.2857 50.0893 39.2857H48.9264C49.0364 38.9773 49.1071 38.6493 49.1071 38.3036C49.1071 36.6791 47.7852 35.3571 46.1607 35.3571H27.5V28.4821C27.5 27.94 27.06 27.5 26.5179 27.5H25.5357V2.80107L33.8034 2.21571C33.548 2.73429 33.3929 3.31179 33.3929 3.92857C33.3929 6.09518 35.1548 7.85714 37.3214 7.85714C38.0404 7.85714 38.7063 7.64893 39.2857 7.31107V15.9755L30.4346 21.2555C29.9691 21.5325 29.8159 22.1355 30.0929 22.603C30.2775 22.9114 30.6036 23.0823 30.9375 23.0823C31.1104 23.0823 31.2832 23.0371 31.4404 22.9429L40.2207 17.7061L45.9191 21.7545C46.092 21.8782 46.2904 21.9352 46.4888 21.9352C46.7952 21.9352 47.0996 21.7918 47.2882 21.5227C47.6025 21.0807 47.4984 20.4679 47.0584 20.1536L41.25 16.0246C41.25 16.0246 41.25 4.00714 41.25 3.92857C41.25 1.76196 39.488 0 37.3214 0C37.3038 0 37.288 0.0058929 37.2704 0.0058929C37.2645 0.0058929 37.2586 0.00392876 37.2527 0.00392876L9.75268 1.96821C9.74482 1.96821 9.73696 1.97411 9.72911 1.97411C7.60768 2.02518 5.89286 3.75768 5.89286 5.89286V27.828L0.681607 29.5114C0.275 29.643 0 30.0202 0 30.4464V46.1607C0 46.7029 0.44 47.1429 0.982143 47.1429H12.7679C13.31 47.1429 13.75 46.7029 13.75 46.1607V30.4464C13.75 30.028 13.4829 29.6548 13.088 29.5173L7.85714 27.718V9.27536C8.43661 9.61321 9.1025 9.82143 9.82143 9.82143C11.988 9.82143 13.75 8.05946 13.75 5.89286C13.75 5.08161 13.5025 4.32536 13.0782 3.69875L17.6786 3.37268V27.5H16.6964ZM17.6786 53.0357V29.4643H25.5357V53.0357H17.6786ZM45.1786 53.0357H43.2143V45.1786H45.1786V53.0357ZM49.1071 43.2143H27.5V41.25H49.1071V43.2143ZM46.1607 37.3214C46.7009 37.3214 47.1429 37.7614 47.1429 38.3036C47.1429 38.8457 46.7009 39.2857 46.1607 39.2857H27.5V37.3214H46.1607ZM39.2857 3.92857C39.2857 5.01089 38.4057 5.89286 37.3214 5.89286C36.2371 5.89286 35.3571 5.01089 35.3571 3.92857C35.3571 2.85018 36.2293 1.97607 37.3057 1.96821L37.3273 1.96625C38.4096 1.97018 39.2857 2.84821 39.2857 3.92857ZM11.7857 39.3132C11.7405 39.3054 11.7012 39.2857 11.6541 39.2857H2.46518C2.27857 39.2857 2.11357 39.3525 1.96429 39.4429V35.2C2.11357 35.2904 2.27857 35.3571 2.46518 35.3571H11.6541C11.7012 35.3571 11.7405 35.3375 11.7857 35.3296V39.3132ZM1.96429 45.1786V41.0929C2.11357 41.1832 2.27857 41.25 2.46518 41.25H11.6541C11.7012 41.25 11.7405 41.2304 11.7857 41.2225V45.1786H1.96429ZM11.7857 33.4204C11.7405 33.4125 11.7012 33.3929 11.6541 33.3929H2.46518C2.27857 33.3929 2.11357 33.4596 1.96429 33.55V31.1614L7.05179 29.5173L11.7857 31.1477V33.4204ZM9.82143 7.85714C8.73714 7.85714 7.85714 6.97518 7.85714 5.89286C7.85714 4.81054 8.73714 3.92857 9.82143 3.92857C10.9057 3.92857 11.7857 4.81054 11.7857 5.89286C11.7857 6.97518 10.9057 7.85714 9.82143 7.85714ZM19.6429 3.23125L23.5714 2.9425V27.5H19.6429V3.23125Z" fill="black"></path></svg></div>
                                                            <h2 className='lg:text-[22px] text-[19px] font-bold pt-5'>Discipline And Dedication</h2>
                                                            <p className='py-3 lg:text-[18px] text-[#7B7E86]'>Building Muscles increases your resting metabolic reat, which can aid in weight management a fat lose</p>
                                                            <Link className='flex items-center gap-4 text-black font-bold uppercase'><FaArrowRight/> Read More</Link>
                                             </div>
               </Carousel>
               </div>
  )
}

export default Services1