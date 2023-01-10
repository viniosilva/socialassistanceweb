type Family = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | undefined;
  name: string;
  country: string;
  state: string;
  city: string;
  street: string;
  neighborhood: string;
  number: string;
  complement: string;
  zipcode: string;
};

export default Family;
