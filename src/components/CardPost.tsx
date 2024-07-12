import React from 'react';
import Image from 'next/image';

import { Text, Heading, Button, Icon } from '@base';
import { ChipContainer } from './ChipContainer';

type BaseProps = {
  title: string;
  src: string;
  className?: string;
  customHeight?: number;
  category: string[];
  type: 'Primary' | 'Secondary' | 'Tertiary';
  alt: string;
};

type ConditionalProps<T> = T extends { type: 'Secondary' }
  ? {
      subTitle?: string;
    }
  : { subTitle: string };

type Props<T extends BaseProps> = T & ConditionalProps<T>;

const Primary = ({ title, subTitle }: { title: string; subTitle: string }) => {
  return (
    <>
      {' '}
      <div className="flex flex-col lg:flex-row items-start md:items-center">
        <div className="self-start md:w-[80%]">
          <Text className="font-bold md:text-s1 text-b1 mb-2">{title}</Text>
          {subTitle && (
            <Text size={'B2'} className=" flex-1 mr-5">
              {subTitle}
            </Text>
          )}
        </div>
        <div className="mt-4 self-start lg:w-[170px] lg:self-end">
          <Button color="orange" text="Saiba mais" />
        </div>
      </div>
    </>
  );
};

const Secondary = ({ title }: { title: string }) => {
  return (
    <>
      <Heading size="H6" className="font-bold ">
        {title}
      </Heading>
      <div className="h-[32-px] mt-3">
        <Button text="Saiba mais" size="small" />
      </div>
    </>
  );
};

const Tertiary = ({ title, subTitle }: { title: string; subTitle: string }) => {
  return (
    <>
      <Heading headingLevel={6} size={'H6'} className="font-bold mb-[6px]">
        {title}
      </Heading>
      <div>
        <Text size={'B2'} className="flex-1 mb-3">
          {subTitle}
        </Text>
      </div>
      <Text textType="a" size={'C1'} className="font-bold text-orange flex cursor-pointer">
        LEIA MAIS
        <div className="ml-4">
          <Icon type="ArrowRight" />
        </div>
      </Text>
    </>
  );
};

const ContentSelect = {
  Primary: Primary,
  Secondary: Secondary,
  Tertiary: Tertiary,
};

export const CardPost = <T extends BaseProps>({
  title,
  subTitle,
  src,
  className,
  customHeight = 276,
  category,
  type,
  alt,
}: Props<T>) => {
  const SelectedComponent = ContentSelect[type];
  return (
    <div
      className={`flex flex-col h-[370px] md:h-full bg-white w-full items-center rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ${className}`}
    >
      <div className={`w-full h-[${customHeight}px] relative flex-1 `}>
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <Image src={src} fill className="rounded-t-[10px] object-cover h-auto w-auto" alt={alt} />
        </div>
      </div>
      <div className="pt-[15px] px-[20px] pb-[20px] ">
        <div className="pb-[18px]">
          {category.map((categoryText, i) => {
            return <ChipContainer key={i}>{categoryText}</ChipContainer>;
          })}
        </div>
        <SelectedComponent title={title} subTitle={subTitle as string} />
      </div>
    </div>
  );
};
