import React from 'react'
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Skeleton.scss"
const SkillsSkeleton = () => {
  return (
    <div className="skill-skeleton">
      <Skeleton  height={30} width={300} count={7}  />
    </div>
  )
}

export default SkillsSkeleton