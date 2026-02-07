/**
 * Node modules
 */
import { motion } from 'motion/react';

/**
 * Custom modules
 */
import { fadeUp } from '@/lib/animations';

/**
 * Components
 */
import { Button } from '@/components/ui/button';

/**
 * Assets
 */
import { ExternalLink } from 'lucide-react';

/**
 * Types
 */
import type { ProjectType } from '@/types';

export const ProjectCard = ({
  imgSrc,
  projectLink,
  tags,
  title,
}: ProjectType) => {
  return (
    <motion.div
      variants={fadeUp}
      className='relative'
    >
      <figure className='overflow-hidden rounded-md'>
        <img
          src={imgSrc}
          alt={title}
          className='rounded-md transition duration-500 hover:scale-115 w-full'
        />
      </figure>

      <div className='absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition duration-300 flex items-center justify-center rounded-md'>
        {projectLink && (
          <Button asChild>
            <a href={projectLink} target='_blank' rel='noopener noreferrer' className='flex items-center gap-2'>
              Visit Project <ExternalLink size={16} />
            </a>
          </Button>
        )}
      </div>

      <div className='absolute bottom-0 p-2 flex gap-2'>
        {tags.map((tag, i) => (
          <span
            key={i}
            className='bg-background hover:bg-primary hover:text-black py-1 px-2 rounded-sm text-sm cursor-pointer'
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
