import React from "react"
import { featured } from "../../data/Data"
import {Link} from "react-router-dom"
import {motion} from "framer-motion"

const FeaturedCard = () => {
  return (
    <>
      <div className="content grid5 mtop">
        {featured.map((items, index) => (
          <Link
            to={`${items.link}`}
            style={{ textDecoration: "none", color: "#2d3954" }}
          >
            {items.left ? (
              <motion.div
                className="box"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                }}
                viewport={{ once: true }}
              >
                <img src={items.cover} alt="" />
                <h4>{items.name}</h4>
              </motion.div>
            ) : (
              <motion.div
                className="box"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                }}
                viewport={{ once: true }}
              >
                <img src={items.cover} alt="" />
                <h4>{items.name}</h4>
              </motion.div>
            )}
          </Link>
        ))}
      </div>
    </>
  );
}

export default FeaturedCard
