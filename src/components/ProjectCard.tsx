import React from 'react';
import { ZeitUIThemes, Button, Text, Link, Card, Dot, Tag } from '@zeit-ui/react';
import makeStyles from '../makeStyles';
import * as Icons from '@ofekashery/vercel-icons';

interface Props {
  projectId: string;
  created: string;
  repo: string;
}

const useStyles = makeStyles((ui: ZeitUIThemes) => ({
  card: {
    padding: '0 !important',
    marginBottom: `calc(${ui.layout.gap}*1.5) !important`
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: ui.layout.gap,
    '& h3': {
      margin: 0
    }
  },
  created: {
    fontSize: 14,
    color: 'rgb(153, 153, 153) !important',
    margin: `0 0 0 ${ui.layout.gapHalf}`,
    textAlign: 'right'
  },
  visitButton: {},
  '@media screen and (max-width: 540px)': {
    created: {
      display: 'none !important'
    },
    visitButton: {
      display: 'none !important'
    }
  },
  dot: {
    display: 'flex !important',
    marginTop: ui.layout.gapQuarter,
    '& .icon': {
      backgroundColor: '#50e3c2 !important'
    },
    '& .label': {
      textTransform: 'none !important',
      display: 'flex',
      flex: 1,
      overflow: 'hidden'
    },
    '& .label a': {
      display: 'inline-block',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      fontSize: 14,
      lineHeight: 'normal'
    },
    '& .link': {
      fontWeight: 500
    }
  },
  tag: {
    display: 'flex !important',
    alignItems: 'center',
    textTransform: 'capitalize !important',
    fontSize: '12px !important',
    padding: '3px 7px !important',
    borderRadius: '16px !important',
    height: 'unset !important',
    marginLeft: 8,
    color: `${ui.palette.foreground} !important`
  },
  footer: {
    display: 'flex !important',
    alignItems: 'center !important',
    height: 50,
    width: '100% !important'
  },
  repo: {
    fontSize: 14,
    fontWeight: 500,
    marginLeft: '6px !important'
  }
}));

const ProjectCard = ({ projectId, created, repo }: Props) => {
  const classes = useStyles();
  return (
    <Card shadow className={classes.card}>
      <div className={classes.title}>
        <Text h3>{projectId}</Text>
        <Button className={classes.visitButton} size="small" auto>
          Visit
        </Button>
      </div>
      <div className={classes.content}>
        <Dot type="success" className={classes.dot}>
          <Link href={`https://${projectId}.now.sh`} target="_blank" rel="noopener" pure>
            {projectId}.now.sh
          </Link>
          <Tag className={classes.tag} type="secondary">
            Production
          </Tag>
          <span className={classes.created}>{created}</span>
        </Dot>
        <Dot type="success" className={classes.dot}>
          <Link href={`https://${projectId}.now.sh`} target="_blank" rel="noopener" pure>
            {projectId}-oa71gi2.now.sh
          </Link>
          <Tag className={classes.tag} type="secondary">
            Latest
          </Tag>
          <span className={classes.created}>{created}</span>
        </Dot>
      </div>
      <Card.Footer className={classes.footer}>
        <Link href={`https://github.com/${repo}`} target="_blank" rel="noopener" className={classes.footer} pure>
          <Icons.Github size={14} />
          <Text className={classes.repo}>{repo}</Text>
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default ProjectCard;
