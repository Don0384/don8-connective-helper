
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { fetchDonationsWithProfiles } from "@/services/donationService";
import { type DonationWithProfiles } from "@/types/donations";

export const useDonations = () => {
  const { toast } = useToast();
  const [donations, setDonations] = useState<DonationWithProfiles[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<string | null>(null);

  const fetchDonations = async () => {
    setLoading(true);
    try {
      const enhancedDonations = await fetchDonationsWithProfiles();
      setDonations(enhancedDonations);
    } catch (error: any) {
      console.error("Error in useDonations hook:", error);
      toast({
        title: "Error",
        description: "Failed to fetch donations: " + error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDonations();
  }, []);

  // Filter donations based on status
  const filteredDonations = statusFilter
    ? donations.filter((donation) => donation.status === statusFilter)
    : donations;

  return {
    donations: filteredDonations,
    loading,
    statusFilter,
    setStatusFilter,
    fetchDonations,
  };
};
