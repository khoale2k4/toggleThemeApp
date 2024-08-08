import React from 'react';

const InfoBanners = () => {
  const banners = [
    { icon: 'fa-truck', text: 'Free Shipping', subtext: 'Above $5 Only' },
    { icon: 'fa-leaf', text: 'Certified Organic', subtext: '100% Guarantee' },
    { icon: 'far fa-money-bill-alt', text: 'Huge Savings', subtext: 'At Lowest Price' },
    { icon: 'fa-sync', text: 'Easy Returns', subtext: 'No Questions Asked' }
  ];

  return (
    <section className="flex justify-around bg-black text-white p-12 flex-wrap">
      {banners.map((banner, index) => (
        <div key={index} className="info-banner flex items-center bg-gray-800 p-5 flex-1 mx-2 my-2">
          <i className={`fa ${banner.icon} text-green-500 text-xl pr-5`}></i>
          <p className="text-lg">
            <strong>{banner.text}</strong><br />
            {banner.subtext}
          </p>
        </div>
      ))}
    </section>
  );
};

export default InfoBanners;
