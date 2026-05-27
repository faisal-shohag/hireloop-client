"use client";
import { ApiClient } from "@/lib/api-client";
import { getUserClient } from "@/lib/getUserClient";
import { Rocket } from "@gravity-ui/icons";
import { Button, Modal } from "@heroui/react";
import toast from "react-hot-toast";

const JobApply = ({jobId}) => {
  const user = getUserClient();

  const handlePayment = async () => {
    try {
      const { data } = await ApiClient({
        path: "/create-checkout",
        method: "POST",
        auth: true,
      });
      window.location.href = data.url;
    } catch (error) {
      console.error("Payment error:", error);
    }
  };

  const handleApply = async () => {
console.log(jobId)
    toast.loading("Applying..." ,{ id: "application" })
    try {
      const { data, ok } = await ApiClient({
        path: `/job/apply/${jobId}`,
        method: "POST",
        auth: true,
      });
      if(!ok) {
        toast.error(data?.message || "Failed to apply!", { id: "application" })
        return;
      }
      toast.success("Applied successfully", { id: "application" })

      
      console.log(data);
    }
    catch (error) {
      toast.error("Something went wrong!", { id: "application" })
      console.error("Application error:", error);
    }
  }
  return (
    <Modal>
      <Button className="flex-1 sm:flex-initial">Apply Now</Button>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-90">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-default text-foreground">
                <Rocket className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Application</Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              {user?.plan === "free" ? (
                <p>
                  Are you sure you want to apply for this job? You will be
                  charged $20(one time payment).
                </p>
              ) : (
                <p>Do you want to apply this job?</p>
              )}
            </Modal.Body>
            <Modal.Footer>
             { user?.plan =="free" ? <Button onClick={handlePayment} className="w-full" slot="close">
                Pay $20
              </Button> : <Button onClick={handleApply} className="w-full" slot="close">Apply</Button>}
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default JobApply;
