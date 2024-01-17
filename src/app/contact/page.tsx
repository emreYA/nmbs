"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import { FormEvent, useState } from "react";
// @ts-ignore
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [captcha, setCaptcha] = useState<string | null>();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    address: "",
    postcode: "",
    serviceType: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (captcha) {
      setIsSubmitting(true);

      try {
        const response = await fetch("/api/requestOfferte", {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.status === 200) {
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
            address: "",
            postcode: "",
            serviceType: "",
          });
          toast({
            description: "bedankt voor uw offerte aanvraag.",
          });
        }
      } catch (error) {
        console.error("Error submitting form", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-2 lg:gap-24 p-8">
      <div className="flex-1 flex flex-col gap-4 lg:gap-24 justify-between">
        <div>
          <h3 className="text-2xl lg:text-4xl font-bold">Offerte</h3>
          <p className="lg:text-lg">
            Op zoek naar een oplossing op maat, afgestemd op uw behoeften? Vul
            het formulier in en we nemen binnenkort contact met u op. Als u
            afbeeldingen of aanvullende details heeft om te delen, kunt u deze
            e-mailen naar onderstaande email.
          </p>
        </div>
        <div className="bg-white p-4 rounded-md flex flex-col gap-4">
          <h3 className="text-2xl lg:text-4xl font-bold">Contact gegevens</h3>
          <div>
            <p className="lg:text-lg font-bold">Telelfoon</p>
            <Link className="hover:underline" href="tel:+31628217687">
              0628217687
            </Link>
          </div>
          <div>
            <p className="lg:text-lg font-bold">Email</p>
            <Link
              className="hover:underline"
              href="mailto:noordermultidiensten@gmail.com"
            >
              noordermultidiensten@gmail.com
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <h2 className="text-amber-500  font-bold my-2">
          Een offerte aanvragen
        </h2>
        <form onSubmit={onSubmit} className="flex flex-col gap-5">
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Naam en Achternaam"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="text"
            placeholder="Telefoonnummer"
            required
          />
          <Input
            id="address"
            name="address"
            type="text"
            placeholder="Adres en husinummer"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <Input
            id="postcode"
            name="postcode"
            type="text"
            placeholder="Postcode"
            value={formData.postcode}
            onChange={handleChange}
            required
          />
          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-400 focus:border-blue-400"
            required
          >
            <option value="">Selecteer een service</option>
            <option value="Bouw">Bouw</option>
            <option value="Schoonmaak">Schoonmaak</option>
          </select>
          <Textarea
            id="message"
            name="message"
            cols={30}
            rows={10}
            placeholder="Uw bericht"
            required
            value={formData.message}
            onChange={handleChange}
          ></Textarea>
          <ReCAPTCHA
            sitekey="6Ld880wpAAAAACWDALTtKAsZsdWNmWEBvvX_ba8O"
            onChange={setCaptcha}
          />
          <Button
            disabled={isSubmitting}
            type="submit"
            className="rounded-none bg-amber-500 hover:bg-amber-600"
          >
            {isSubmitting ? "Verzenden..." : "Verzenden"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
