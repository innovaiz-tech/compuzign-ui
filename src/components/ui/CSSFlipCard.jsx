import { motion } from 'framer-motion';

const CSSFlipCard = ({ title, description, icon: Icon, index }) => {
  return (
    <motion.div
      className="flip-card-container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className="flip-card">
        <div className="flip-card-inner">
          {/* Front of card */}
          <div className="flip-card-front">
            <div className="h-full bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl border-2 border-gray-700 flex flex-col items-center justify-center p-8 relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 20% 80%, #ffda17 0%, transparent 50%),
                                   radial-gradient(circle at 80% 20%, #3b82f6 0%, transparent 50%)`
                }}></div>
              </div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-bgYellow via-yellow-500 to-primary-bgYellow rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Icon className="w-10 h-10 text-black drop-shadow-sm" />
                </div>
                <h3 className="text-xl font-bold text-white leading-tight mb-2">
                  {title}
                </h3>
                <p className="text-primary-bgYellow text-sm font-medium">
                  Hover to learn more
                </p>
              </div>
            </div>
          </div>

          {/* Back of card */}
          <div className="flip-card-back">
            <div className="h-full bg-gradient-to-br from-primary-bgYellow via-yellow-500 to-primary-bgYellow rounded-2xl flex flex-col items-center justify-center p-8 relative overflow-hidden">
              {/* Subtle background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `
                    linear-gradient(45deg, rgba(0,0,0,0.1) 25%, transparent 25%),
                    linear-gradient(-45deg, rgba(0,0,0,0.1) 25%, transparent 25%),
                    linear-gradient(45deg, transparent 75%, rgba(0,0,0,0.1) 75%),
                    linear-gradient(-45deg, transparent 75%, rgba(0,0,0,0.1) 75%)
                  `,
                  backgroundSize: '20px 20px',
                  backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                }}></div>
              </div>
              
              <div className="relative z-30 flex flex-col items-center h-full justify-center text-center">
                <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mb-6 shadow-lg border-2 border-black/50">
                  <Icon className="w-8 h-8 text-primary-bgYellow drop-shadow-sm" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4 leading-tight">
                  {title}
                </h3>
                <p className="text-center text-black font-bold leading-relaxed text-base" 
                   style={{ 
                     textShadow: '1px 1px 2px rgba(255,255,255,0.3)' 
                   }}>
                  {description}
                </p>
              </div>
              
              {/* Decorative corner accents */}
              <div className="absolute top-4 right-4">
                <div className="w-3 h-3 bg-black/30 rounded-full shadow-lg"></div>
              </div>
              <div className="absolute bottom-4 left-4">
                <div className="w-2 h-2 bg-black/20 rounded-full shadow-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CSSFlipCard; 