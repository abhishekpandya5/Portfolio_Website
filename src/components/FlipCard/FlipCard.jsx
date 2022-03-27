import React from 'react';
import { SiGithub } from 'react-icons/si';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import './FlipCard.styles.scss';

function FlipCard({ avatar, title, sourceUrl, hostUrl, description }) {
	return (
		<div className="flip-card my-4">
			<div className="flip-card-inner">
				<div className="flip-card-inner-front">
					<img
						src={avatar}
						alt="Avatar"
						// style={{ width: '300px', height: '300px' }}
					/>
				</div>
				<div className="flip-card-inner-back p-3">
					<div className="title">{title}</div>
					<div className="link">
						<a
							href={sourceUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="hover-icons"
						>
							<SiGithub />
						</a>
						<a
							href={hostUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="hover-icons"
						>
							<BsBoxArrowUpRight />
						</a>
					</div>
					<div className="desc">{description}</div>
				</div>
			</div>
		</div>
	);
}

export default FlipCard;
