/* eslint-disable */
 interface ReputationDisplayProps {;
  reputation: number;
size?: 'sm' | 'md' | 'lg' ;'
}export const ReputationDisplay = ({;''
  reputation;';''
size = 'md' ;
}: ReputationDisplayProps) => {;
  //Calculate next milestone const currentLevel = Math.floor (reputation / 100);
const nextMilestone = (currentLevel + 1) * 100;
const progress = ( (reputation % 100) /100) * 100;
sm: {;
  </div> </div>) ;
};'
export default ReputationDisplay;''
'''