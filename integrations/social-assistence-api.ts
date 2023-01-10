import Family from "../models/family";

const HOST = "http://localhost:8080/api";

export const getFamilies = async (): Promise<Family[]> => {
  const data: Family[] = [];

  try {
    const res = await fetch(`${HOST}/v1/families`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    const body = await res.json();

    body.data?.forEach((d: Record<string, any>) => {
      data.push({
        id: +d.id,
        createdAt: new Date(d.created_at),
        updatedAt: new Date(d.updated_at),
        name: d.name,
        country: d.country,
        state: d.state,
        city: d.city,
        street: d.street,
        neighborhood: d.neighborhood,
        number: d.number,
        complement: d.complement,
        zipcode: d.zipcode,
      } as Family);
    });
  } catch (err) {
    console.error(err);
  } finally {
    return data;
  }
};
