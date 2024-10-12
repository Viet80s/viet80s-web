import { CardIOS } from "react-wallets";

export const MyWalletComponent = () => {
  return (
    <CardIOS
      //card-type----------
      type="bus"
      //styles-------------
      backgroundColor="#eaf9fa"
      titleColor="#1b38db"
      textColor="#ab2"
      //header-------------
      headerLogoLink="https://seeklogo.com/images/H/hummingbird-logo-D436A31661-seeklogo.com.png"
      title="Number"
      mainTitle="223"
      //information----------
      LeftTitle="calais france"
      LeftValue="fr"
      RightTitle="douvres royaume unis"
      RightValue="uk"
      topLeftTitle="departure date"
      topLeftValue="24/08/2023"
      topCenterLeftTitle="arrival date"
      topCenterLeftValue="26/08/2023"
      topRightTitle="price"
      topRightValue="123$"
      bottomLeftTitle="passenger"
      bottomLeftValue="Alan Jason"
      //access---------------
      accessImage="https://upload.wikimedia.org/wikipedia/commons/7/78/Qrcode_wikipedia_fr_v2clean.png"
      accessType="QR"
      accessCodeId="6066e4315abbcc1f9526d392"
      //details--------------
      descriptionTitle="This trip is about:"
      description="Exchangeable and refundable free of charge by voucher up to 8 days before your depature."
      termsAndConditionsTitle="conditions"
      termsAndConditions="terms and conditions here"
    />
  );
};
