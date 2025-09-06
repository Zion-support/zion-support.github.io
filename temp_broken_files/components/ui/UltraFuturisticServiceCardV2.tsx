 
}const UltraFuturisticServiceCardV2: React.FC<ServiceCardProps> = ({
  service, index 
}) => {
  const getCategoryIcon = (category: string) => {
  switch (category.toLowerCase () ) {
  case 'ai & consciousness': 
}
};
const getGradientClass = (color: string) => {
  if (color.includes ('from-') && color.includes ('to-') ) {
  return color;
}return 'from-cyan-500 to-blue-500' 
};
{
  opacity: 0, y: 50, scale: 0.9 
}
}animate= {
  {
  opacity: 1, y: 0, scale: 1 
}
}transition= {
  {
  duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] 
}
}whileHover= {
  {
  y: -10, scale: 1.02, transition: {
  duration: 0.3 
}
}
}className="group relative" > </span> </div> </div> </div> {
  service.popular && (<motion.div > <Star className="w-3 h-3 fill-current" /> <span>POPULAR</span> </motion.div>) 
}</div> </div> </div> </div> </span> <span className="text-xs text-gray-500" > (save 17%) </span> </div> $ {
  service.price.enterprise 
}/mo </span> </div>) 
}</div> </div> + {
  service.features.length - 3 
}more features </div>) 
}</div> </div> </motion.div>) ) 
}</div> </div> </div> </div> </div>) 
}> <span className="relative z-10 flex items-center space-x-2" > <span>Learn More</span> <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" /> </span> </motion.a> </div> {
  /* Hover overlay */ 
}<motion.div /> </div> </motion.div>) 
};
export default UltraFuturisticServiceCardV2;
