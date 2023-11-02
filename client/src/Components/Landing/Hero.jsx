import React, { useEffect, useState } from "react";
// import 'swiper/swiper-bundle.min.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const changeSlide = (slideNumber) => {
    setCurrentSlide(slideNumber);
  };
  useEffect(() => {
    const slideTimer = setTimeout(() => {
      const nextSlide = currentSlide === 4 ? 1 : currentSlide + 1;
      setCurrentSlide(nextSlide);
    }, 5000);
    return () => clearTimeout(slideTimer);
  }, [currentSlide]);

  return (
    // <div id="default-carousel" className="QYPW4nl6nHaIbrtaXf4h jCISvWkW5oStPH6Wrb_H" data-carousel="slide">
    //     {/* <!-- Carousel wrapper --> */}
    //     <div className="QYPW4nl6nHaIbrtaXf4h hO0yYxbhE9M6AT6tnNx0 Odj8n83y7sKz4V0UfIxN _Qk4_E9_iLqcHsRZZ4ge YNGcLi5w6_FzyXJeyzRk">
    // {/* <!-- Item 1 --> */}
    // <div className="_rQfu5s_ozvMmIHvaipS sNk1Ftxlo5_azsr1wF3F _Qk4_E9_iLqcHsRZZ4ge iZ8W30HPRQAuO6al90LU EDIXK1RoLh9IsTGzcUBT yvRWkoRx_Apshie5g15o B_Mg78Zl0_AuSOcVLMGS si0W4yw4peoOpbmHOl83 _v8hjA9ct_v6OhSQD7fC j2x7_17hqRVmwte_tWFa" data-carousel-item="">
    //     <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/ngo-carousel/image-1.jpg" className="iZ8W30HPRQAuO6al90LU _Qk4_E9_iLqcHsRZZ4ge ttxtqsLWp2pFRX8yUvWd jCISvWkW5oStPH6Wrb_H wfpSIkDBCpd44vEdymO_ _mssRcs8MyBUGQj4V4fc kRnPsj4Hbdd46XYrDu14 c1ibYmNHw6Cxfcu_pPgz" alt="" />
    // </div>
    //         {/* <!-- Item 2 --> */}
    //         <div className="_rQfu5s_ozvMmIHvaipS sNk1Ftxlo5_azsr1wF3F _Qk4_E9_iLqcHsRZZ4ge iZ8W30HPRQAuO6al90LU EDIXK1RoLh9IsTGzcUBT yvRWkoRx_Apshie5g15o B_Mg78Zl0_AuSOcVLMGS si0W4yw4peoOpbmHOl83 _v8hjA9ct_v6OhSQD7fC" data-carousel-item="">
    //             <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/ngo-carousel/image-2.jpg" className="iZ8W30HPRQAuO6al90LU _Qk4_E9_iLqcHsRZZ4ge ttxtqsLWp2pFRX8yUvWd jCISvWkW5oStPH6Wrb_H wfpSIkDBCpd44vEdymO_ _mssRcs8MyBUGQj4V4fc kRnPsj4Hbdd46XYrDu14 c1ibYmNHw6Cxfcu_pPgz" alt="" />
    //         </div>
    //         {/* <!-- Item 3 --> */}
    //         <div className="_rQfu5s_ozvMmIHvaipS sNk1Ftxlo5_azsr1wF3F _Qk4_E9_iLqcHsRZZ4ge iZ8W30HPRQAuO6al90LU EDIXK1RoLh9IsTGzcUBT yvRWkoRx_Apshie5g15o B_Mg78Zl0_AuSOcVLMGS _0PJkI8eA25FIbUKfI1v MN_MaEuEFmiXUnb4S5NS" data-carousel-item="">
    //             <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/ngo-carousel/image-3.jpg" className="iZ8W30HPRQAuO6al90LU _Qk4_E9_iLqcHsRZZ4ge ttxtqsLWp2pFRX8yUvWd jCISvWkW5oStPH6Wrb_H wfpSIkDBCpd44vEdymO_ _mssRcs8MyBUGQj4V4fc kRnPsj4Hbdd46XYrDu14 c1ibYmNHw6Cxfcu_pPgz" alt="" />
    //         </div>
    //         {/* <!-- Item 4 --> */}
    //         <div className="_rQfu5s_ozvMmIHvaipS sNk1Ftxlo5_azsr1wF3F _Qk4_E9_iLqcHsRZZ4ge iZ8W30HPRQAuO6al90LU EDIXK1RoLh9IsTGzcUBT yvRWkoRx_Apshie5g15o B_Mg78Zl0_AuSOcVLMGS _v8hjA9ct_v6OhSQD7fC _txZr_XzKh1AA2GR58P5" data-carousel-item="">
    //             <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/ngo-carousel/image-4.jpg" className="iZ8W30HPRQAuO6al90LU _Qk4_E9_iLqcHsRZZ4ge ttxtqsLWp2pFRX8yUvWd jCISvWkW5oStPH6Wrb_H wfpSIkDBCpd44vEdymO_ _mssRcs8MyBUGQj4V4fc kRnPsj4Hbdd46XYrDu14 c1ibYmNHw6Cxfcu_pPgz" alt="" />
    //         </div>
    //     </div>
    //     {/* <!-- Slider indicators --> */}
    //     <div className="iZ8W30HPRQAuO6al90LU _hiiNzR2vr3SrSW1a9Nq kqgYncRJQ7spwKfig6It B1cgbA6Bb4LQo0qFJKck wfpSIkDBCpd44vEdymO_ ZxCHyMvwEWnRu3Bz0A4k c1ibYmNHw6Cxfcu_pPgz">
    //         <button type="button" className="hDwBtOhIf4ji_OJlxtQ5 Har7ksLdj_gpHuS5dC3P n8e6ORKgPTnY6zgs5HS7 b09gYy3albM7wXTWJAII _qJxewQ37gBGMMVf11hs djld5jFcbPSy1YdGoI7k GbuoIVQvgE1sPez3FB0O" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
    //         <button type="button" className="hDwBtOhIf4ji_OJlxtQ5 Har7ksLdj_gpHuS5dC3P n8e6ORKgPTnY6zgs5HS7 b09gYy3albM7wXTWJAII _qJxewQ37gBGMMVf11hs djld5jFcbPSy1YdGoI7k GbuoIVQvgE1sPez3FB0O" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
    //         <button type="button" className="hDwBtOhIf4ji_OJlxtQ5 Har7ksLdj_gpHuS5dC3P n8e6ORKgPTnY6zgs5HS7 yjGyQxv8jnYk9_MGMqLN _cpMMPjFQqjJu4i0Puod" aria-current="true" aria-label="Slide 3" data-carousel-slide-to="2"></button>
    //         <button type="button" className="hDwBtOhIf4ji_OJlxtQ5 Har7ksLdj_gpHuS5dC3P n8e6ORKgPTnY6zgs5HS7 b09gYy3albM7wXTWJAII _qJxewQ37gBGMMVf11hs djld5jFcbPSy1YdGoI7k GbuoIVQvgE1sPez3FB0O" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
    //         <button type="button" className="hDwBtOhIf4ji_OJlxtQ5 Har7ksLdj_gpHuS5dC3P n8e6ORKgPTnY6zgs5HS7 b09gYy3albM7wXTWJAII _qJxewQ37gBGMMVf11hs djld5jFcbPSy1YdGoI7k GbuoIVQvgE1sPez3FB0O" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    //     </div>
    //     {/* <!-- Slider controls --> */}
    // <button type="button" className="iZ8W30HPRQAuO6al90LU _ccvJ9JsfoF81kZ3lkJh _J57_xJ7KhmAX1D2Pnei _hiiNzR2vr3SrSW1a9Nq kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _WclR59Ji8jwfmjPtOei j34KztD3SBxL_tQWzosr veFXkDzfJN473U3ycrV8 avTmsFU5TwHXQh07Ji35 __CB1NVTb04MHxDxK6Hw qHIOIw8TObHgD3VvKa5x" data-carousel-prev="">
    //     <span className="ay0ziTPUL4Ag5d1DkSY7 neyUwteEn7DOg9pBSJJE _WclR59Ji8jwfmjPtOei _vZPglRSyqi4oTXg5L1_ _pwSRUXRHN5bHphyTRKz n8e6ORKgPTnY6zgs5HS7 l7P6mxe4mAJ2zI0n_j_P ZTVgTvkeLA77aHqzv1Xf z9T4SNS_TmJE5VjAh2jw WoC_bnXh95SNWLZQ8DPn fOxyUpClzf_Lcu2WSd5Q N0sVvA8e3kS5v8elltW7 _3B9zRCH2yooHY4rhXcW _IgVsIAj3uFo_o0V_rqA EH2isgaQ8TX5v1KnyqYs aUTxmIkyphwCjyCF3tr7">
    //         <svg aria-hidden="true" className="eUuXwBkW5W4__eatjSfd RRXFBumaW2SHdseZaWm6 wP9HMsqy6b96l2HBRbgb mJ_fWBhGkTBPTKzaSiSC jj5uJFFMZYV66dJMU09Y _fB3agpp5PBE4RH_lu_g" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
    //         <span className="BWabIWdbZ5qWNbPXxuBc">Previous</span>
    //     </span>
    // </button>
    // <button type="button" className="iZ8W30HPRQAuO6al90LU _ccvJ9JsfoF81kZ3lkJh AMjjbpqWkJRuIruRGJbg _hiiNzR2vr3SrSW1a9Nq kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _WclR59Ji8jwfmjPtOei j34KztD3SBxL_tQWzosr veFXkDzfJN473U3ycrV8 avTmsFU5TwHXQh07Ji35 __CB1NVTb04MHxDxK6Hw qHIOIw8TObHgD3VvKa5x" data-carousel-next="">
    //     <span className="ay0ziTPUL4Ag5d1DkSY7 neyUwteEn7DOg9pBSJJE _WclR59Ji8jwfmjPtOei _vZPglRSyqi4oTXg5L1_ _pwSRUXRHN5bHphyTRKz n8e6ORKgPTnY6zgs5HS7 l7P6mxe4mAJ2zI0n_j_P ZTVgTvkeLA77aHqzv1Xf z9T4SNS_TmJE5VjAh2jw WoC_bnXh95SNWLZQ8DPn fOxyUpClzf_Lcu2WSd5Q N0sVvA8e3kS5v8elltW7 _3B9zRCH2yooHY4rhXcW _IgVsIAj3uFo_o0V_rqA EH2isgaQ8TX5v1KnyqYs aUTxmIkyphwCjyCF3tr7">
    //         <svg aria-hidden="true" className="eUuXwBkW5W4__eatjSfd RRXFBumaW2SHdseZaWm6 wP9HMsqy6b96l2HBRbgb mJ_fWBhGkTBPTKzaSiSC jj5uJFFMZYV66dJMU09Y _fB3agpp5PBE4RH_lu_g" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
    //         <span className="BWabIWdbZ5qWNbPXxuBc">Next</span>
    //     </span>
    // </button>
    // </div>
    <header className="bg-white dark:bg-gray-800">
      <div className="w-full flex flex-col md:flex-row md:items-center">
        <div className="flex flex-col items-center w-full">
          <div className="relative w-full md:order-2">
            {/* items */}
            {currentSlide === 1 && (
              /* <!-- Item 1 --> */
              <div
                className="w-full"
                data-carousel-item=""
              >
                <div className="flex flex-col lg:flex-row justify-center items-center h-[500px] w-full">
                <img
                  src="https://www.bludot.com/media/catalog/product/f/d/fd1_lngchr_bh_frontlow-field-lounge-chair-tait-blush_2.jpg?optimize=medium&fit=bounds&canvas=1500:1200"
                  className="object-cover h-[200px] w-[250px] md:h-[300px] md:w-[400px] lg:h-[400px] lg:w-[500px]"
                  alt="Image of a chair"
                />
                <div className="flex flex-col justify-start items-center">
                    <div className="m-3 w-[80%] md:text-start text-center">
                        <h1 className="text-2xl font-bold md:text-4xl my-3 text-start">Your Comfort Zone Starts With CraftVine</h1>
                        <button className="bg-teal-600 rounded-full text-white my-3 px-10 py-2">Shop Now</button>
                    </div>
                </div>
              </div>
              </div>
            )}
            {currentSlide === 2 && (
              /* <!-- Item 2 --> */
              <div
                className="w-full h-[500px] bg-cover bg-[50%] bg-[url('https://afhomeph.com/cdn/shop/files/Website_Banner_Direct_from_the_Factory_1.png?v=1685417210&width=2800')]"
                data-carousel-item=""
              >
                <div className="w-full h-full absolute top-0 bottom-0 right-0 left-0 bg-[#3f3f3f5c] flex flex-col justify-center items-center">
                    <div className="m-3 w-2/3">
                        <h1 className="text-white text-2xl font-bold md:text-4xl my-3">Save Big with Our 50% Off Furniture Sale!</h1>
                        <button className="bg-teal-600 rounded-full text-white my-3 px-10 py-2">Shop Now</button>
                    </div>
                </div>
              </div>
            )}
            {currentSlide === 3 && (
              /* <!-- Item 3 --> */
              <div
                className="w-full h-[500px] bg-cover bg-[50%] bg-[url('https://img.freepik.com/free-photo/gray-sofa-brown-living-room-with-copy-space_43614-954.jpg')]"
                data-carousel-item=""
              >
                <div className="w-full h-full absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-center items-center md:items-end">
                    <div className="bg-[#00808098] flex flex-col justify-center items-center mx-16 md:mx-24 rounded-xl">
                        <div className="m-3 p-3">
                            <h1 className="text-white text-2xl font-bold md:text-4xl my-3">Discover Our New Collection</h1>
                            <h3 className="text-white text-lg md:text-2xl my-3">Unveil the Newest Arrivals to Elevate Your Space</h3>
                            <button className="bg-teal-600 rounded-full text-white my-3 px-10 py-2">Shop Now</button>
                        </div>
                    </div>
                </div>
              </div>
            )}
            {currentSlide === 4 && (
              /* <!-- Item 4 --> */
              <div
                className="w-full h-[500px] bg-cover bg-[50%] bg-[url('https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
                data-carousel-item=""
              >
                <div className="w-full h-full absolute top-0 bottom-0 right-0 left-0 bg-[#3f3f3f5c] flex flex-col justify-center items-center">
                </div>
              </div>
            //   <div
            //     className="w-full _rQfu5s_ozvMmIHvaipS sNk1Ftxlo5_azsr1wF3F _Qk4_E9_iLqcHsRZZ4ge iZ8W30HPRQAuO6al90LU EDIXK1RoLh9IsTGzcUBT yvRWkoRx_Apshie5g15o B_Mg78Zl0_AuSOcVLMGS si0W4yw4peoOpbmHOl83 _v8hjA9ct_v6OhSQD7fC j2x7_17hqRVmwte_tWFa"
            //     data-carousel-item=""
            //   >
            //     <img
            //       src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            //       className="h-[500px] w-full object-cover"
            //       alt=""
            //     />
            //   </div>
            )}

            {/* buttons */}
            {/* Previous button */}
            <button
                type="button"
                className={`${currentSlide !== 1 ? `text-white` : `text-black`} absolute top-1/2 left-0 transform -translate-y-1/2 mx-6 p-2 md:p-4`}
                data-carousel-prev=""
                onClick={() => changeSlide(currentSlide === 1 ? 4 : currentSlide - 1)}
            >
                <span className="flex items-center">
                <svg
                    aria-hidden="true"
                    className="w-8 h-8 md:w-16 md:h-16"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                    ></path>
                </svg>
                </span>
            </button>

            {/* Next button */}
            <button
                type="button"
                className={`${currentSlide !== 1 ? `text-white` : `text-black`} absolute top-1/2 right-0 transform -translate-y-1/2 mx-6 p-2 md:p-4`}
                data-carousel-next=""
                onClick={() => changeSlide(currentSlide === 4 ? 1 : currentSlide + 1)}
            >
                <span className="flex items-center">
                <svg
                    aria-hidden="true"
                    className="w-8 h-8 md:w-16 md:h-16"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                    ></path>
                </svg>
                </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;

// <button
//             type="button"
//             className="text-black absolute top-1/2 left-0"
//             data-carousel-prev=""
//             onClick={() => changeSlide(currentSlide === 1 ? 4 : currentSlide - 1)}
//             >
//             <span className="">
//                 <svg
//                 aria-hidden="true"
//                 className=""
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//                 >
//                 <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     d="M15 19l-7-7 7-7"
//                 ></path>
//                 </svg>
//                 <span className="">Previous</span>
//             </span>
//             </button>
//             <button
//             type="button"
//             className="text-black absolute top-1/2 right-0"
//             data-carousel-prev=""
//             onClick={() => changeSlide(currentSlide === 1 ? 4 : currentSlide - 1)}
//             >
//             <span className="">
//                 <svg
//                 aria-hidden="true"
//                 className=""
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//                 >
//                 <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     d="M9 5l7 7-7 7"
//                 ></path>
//                 </svg>
//                 <span className="">Previous</span>
//             </span>
//             </button>