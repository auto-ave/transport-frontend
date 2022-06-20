import queuesImage from '@public/images/no-more-queues.webp';
import diverseOptionsImage from '@public/images/man-cleaning.webp';
import customerSatisfactionImage from '@public/images/customer-satisfaction.webp';

import clockIcon from '@public/icons/clock.svg'
import smileIcon from '@public/icons/smile.svg'
import tagsIcon from '@public/icons/tags.svg'

export const LANDING_WHY_US = [
    {
        'key': 'whyus1',
        'title': 'No more queues',
        'description': 'Book services according to your schedule with zero wait time.',
        'image': diverseOptionsImage,
        'icon': clockIcon,
        'marginTop': '12',
    },
    {
        'key': 'whyus2',
        'title': 'Diverse Options',
        'description': 'Choose from a variety of stores and services near you, select the store which suits you best.',
        'image': customerSatisfactionImage,
        'icon': tagsIcon,
        'marginTop': '6',
    },
    {
        'key': 'whyus3',
        'title': 'Customer Satisfaction',
        'description': 'We help you find the most reliable Car Care Services around you. Ever facing any problem with anything? We are always there to listen.',
        'image': queuesImage,
        'icon': smileIcon,
        'marginTop': '0',
    },
]

