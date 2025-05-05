import BreadCrumbs from "@/components/BreadCrumbs";
import ContactForm from "@/components/ContactForm";


export default function ContactPage() {
  return (
    <>
      <BreadCrumbs links={[{name: "Home", href: "/"}, {name: "Contact us"}]} />
      <ContactForm />
    </>
  );
}
