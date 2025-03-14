
export type Donation = {
  id: number;
  donor_id: string;
  item_name: string;
  description: string | null;
  quantity: string;
  category: string;
  status: string;
  created_at: string;
  location: string;
  receiver_id: string | null;
  expiry_time: string | null;
};

export const categoryDisplayNames: Record<string, string> = {
  clothes: "Clothing",
  food: "Food",
  electronics: "Electronics",
  medical_equipment: "Medical Equipment", 
  medicine: "Medicine"
};

export const categories = [
  "All",
  "clothes",
  "food",
  "electronics",
  "medical_equipment",
  "medicine"
];

export const statuses = [
  "All",
  "pending",
  "received",
  "rejected"
];
