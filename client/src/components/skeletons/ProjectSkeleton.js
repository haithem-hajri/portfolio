import React from 'react'
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const ProjectSkeleton = () => {
  return (
    <div className="card-skeleton">
    <Skeleton height={30} width={140} />
    <Skeleton height={20} width={250} />
    <Skeleton width={140} height={50} />
  </div>
  )
}

export default ProjectSkeleton