import React from "react";

type Props = {
  projectId: any;
};

// SSR
export async function getServerSideProps(context: any) {
  const { params } = context;

  return {
    props: {
      projectId: params?.projectId
    }
  };
}

const ProjectDetails = (props: Props) => {
  return <div>Project details for Id: {props?.projectId}</div>;
};

export default ProjectDetails;
