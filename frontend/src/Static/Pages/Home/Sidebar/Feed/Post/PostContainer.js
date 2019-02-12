import { createComponent } from 'inferno-fela'
import { ArticleContainer } from './ArticleContainer'
import { DatasetContainer } from './DatasetContainer'
import { EventContainer } from './EventContainer'
import { PaperContainer } from './PaperContainer'
import { ProjectContainer } from './ProjectContainer'
import { Brevier, LongPrimer, Pica } from '../../../../../../Shared/Theme/Text'

const Post = createComponent(() => ({
  paddingTop: '1.5rem',
  paddingBottom: '1.5rem',
  borderBottom: '1px solid #ccc'
}))

export const Name = createComponent(() => ({
  marginBottom: '0.2rem',
  color: '#111'
}), Pica)

export const Content = createComponent(() => ({
  fontWeight: 'normal',
  color: '#111',
  marginBottom: '0.2rem'
}), LongPrimer)

export const Meta = createComponent(() => ({
  marginBottom: 0
}), Brevier)

export const PostContainer = ({ item }) => (
  <Post>
    {{ article: <ArticleContainer article={item} />,
       dataset: <DatasetContainer dataset={item} />,
       event: <EventContainer event={item} />,
       paper: <PaperContainer paper={item} />,
       project: <ProjectContainer project={item} />
    }[item.type]}
  </Post>
)