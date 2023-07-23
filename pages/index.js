import AboutUsSec from "@/components/homeSec/AboutUsSec";
import Banner from "@/components/homeSec/Banner";
import BannerBottom from "@/components/homeSec/BannerBottom";
import ChooseSec from "@/components/homeSec/ChooseSec";
import PaymentSec from "@/components/homeSec/PaymentSec";
import ReviewSec from "@/components/homeSec/ReviewSec";
import ServiceSec from "@/components/homeSec/ServiceSec";
import WorkSec from "@/components/homeSec/WorkSec";
import Layout from "@/components/layout/Layout";

export default function Home() {
  return (
    <>
      <Layout >
        <Banner />
        <BannerBottom />
        <AboutUsSec />
        <ServiceSec />
        <ChooseSec />
        <WorkSec />
        <ReviewSec />
        <PaymentSec />
      </Layout>
    </>
  );
}
