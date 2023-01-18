export default function Footer() {
  return (
    <footer className="flex flex-col items-center py-8 px-4 text-xs">
      <div className="brand-logo">
        <img src="/images/logo.png" alt="" />
      </div>
      <div className="brand-description my-9 text-[#303030]">
        <p className="text-center leading-6">
          Dekoor is a furniture company created to fulfill the needs of family
          with aesthetic feeling in their furniture. Always pay attention to
          details and give clear communication for the customers. Priority of
          our design is comfortability.
        </p>
      </div>
      <div className="copyright order-3 text-[#303030]">
        &copy; Copyright 2022 Dekoor
      </div>
      <div className="footer-list mb-9 grid w-full grid-cols-2 gap-y-8 text-center text-xs">
        <ul className="flex flex-col gap-6 text-[#303030]">
          <li className="text-sm font-bold">Support</li>
          <li>FAQ</li>
          <li>Shipping & Returns</li>
          <li>Care guide</li>
          <li>Redeem warranty</li>
        </ul>
        <ul className="flex flex-col gap-6 text-[#303030]">
          <li className="text-sm font-bold">Social Media</li>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>TikTok</li>
        </ul>
        <ul className="col-span-full flex flex-col gap-6 text-[#303030]">
          <li className="text-sm font-bold">About Us</li>
          <li>Our Story</li>
          <li>Designer</li>
          <li>Craftmanship</li>
          <li>Sustainability</li>
        </ul>
      </div>
    </footer>
  );
}
