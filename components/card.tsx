"use client";
import {Card, CardHeader, CardBody, Image, Button, CardFooter} from "@nextui-org/react";

export interface Item {
    id: number;
    name: string;
    price: number;
    seller: string;
    image_url?: string;
}

export default function CustomCard({ item }: { item: Item }): JSX.Element {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{item.name}</p>
        <small className="text-default-500">${item.price.toFixed(2)}</small>
        <h4 className="font-bold text-large">{item.seller}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          //src={item.image_url}
          width={270}
        />
      </CardBody>
      <CardFooter className="">
        <Button 
          className="text-tiny text-white bg-blue-500"
          size="sm"
          radius="lg"
          variant="flat"
        >
          Buy
        </Button>
      </CardFooter>
    </Card>
  );
}