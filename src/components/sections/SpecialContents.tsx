import { Heading, Icon, Text } from '@base';
import { CardPost } from '../CardPost';
import { BlogService } from '@services/blog/BlogService';

export const SpecialContents = async () => {
  const postIds = [1, 2, 1, 2];
  const blogs = await Promise.all(postIds.map(id => BlogService.getBlogById(id)));

  return (
    <div className="mt-10 md:mt-[120px]">
      <div className="flex flex-col md:flex-row mb-[30px] gap-4 items-center">
        <Heading headingLevel={2} size={'H2'} className="font-bold ">
          Conteúdos especiais
        </Heading>
        <Text textType="a" size={'C1'} className="text-orange content-end ml-auto flex">
          Ver todos artigos
          <div className="ml-4">
            <Icon type="ArrowRightShort" />
          </div>
        </Text>
      </div>
      <div className="flex flex-col flex-wrap gap-4 items-center md:flex-row md:justify-evenly md:gap-3">
        {blogs.map(
          (blog, idx) =>
            blog && (
              <div key={idx} className="w-[280px] h-[370px]">
                <CardPost
                  href=""
                  type="Tertiary"
                  title={blog.title}
                  subTitle={blog.description}
                  alt={blog.title}
                  category={blog.categories}
                  src={blog.img}
                />
              </div>
            ),
        )}
      </div>
    </div>
  );
};
