import Applicants from "@/components/organisms/Applicants";
import JobDetail from "@/components/organisms/JobDetail";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { FC } from "react";

interface SettingsPageProps {

}

const SettingsPage: FC<SettingsPageProps> = ({ }) => {
  return (
    <div>
      <div className="font-semibold text-3xl mb-5">
      Settings      
      </div>

      <Tabs defaultValue="overview">
        <TabsList className="mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="socialLinks">Social Links</TabsTrigger>
          <TabsTrigger value="teams">Teams</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div className="">lorem</div>
        </TabsContent>
        <TabsContent value="socialLinks">
          <div className="">lorem</div>
        </TabsContent>
        <TabsContent value="teams">
          <div className="">Teams</div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default SettingsPage;