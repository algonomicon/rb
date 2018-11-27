import requests

def seed_articles():
    data = {
        'name': 'Hello World!',
        'description': 'This is a test description of a fake article post',
        'preview': 'https://source.unsplash.com/600x300'
    }

    for i in range(10):
        requests.post('http://localhost:8000/articles', json=data)

def seed_datasets():
    data = {
        'name': 'Test Dataset',
        'description': 'This is a test description of a fake dataset',
        'attributes': 69,
        'instances': 1499,
        'format': 'CSV'
    }

    for i in range(15):
        requests.post('http://localhost:8000/datasets', json=data)

def seed_events():
    events = [
        {
            'name': 'NIPS: Neural Information Processing Systems',
            'location': 'Montreal, Canada',
            'date': 'Dec 02 - Dec 08'
        },
        {
            'name': 'SC: The International Conference for High Performance Computing',
            'location': 'Dallas, TX',
            'date': 'Aug 19 - Aug 23'
        },
        {
            'name': 'ICML: International Conference on Machine Learning',
            'location': 'Stockholm, Sweden',
            'date': 'Jul 10 - Jul 15'
        },
        {
            'name': 'CVPR: Computer Vision and Pattern Recognition',
            'location': 'Long Beach, CA',
            'date': 'Jun 15 - Jun 21'
        },
        {
            'name': 'KDD: Knowledge Discovery and Data Mining',
            'location': 'London, UK',
            'date': 'Aug 19, Aug 23'
        }
    ]

    for event in events:
        requests.post('http://localhost:8000/events', json=event)

def seed_papers():
    data = {
        'name': 'Hello World!',
        'abstract': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio doloribus unde a tempore, id, dignissimos deleniti hic fugit veniam mollitia corrupti dolorem culpa rem ex totam, velit explicabo. Harum, odio!'
    }

    for i in range(10):
        requests.post('http://localhost:8000/papers', json=data)

def seed_projects():
    data = {
        'name': 'Hello World Project',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim perferendis consequatur voluptatibus sequi, dolorum deleniti maiores eos fugiat. Velit voluptatum aperiam repellat architecto doloremque vero accusantium, quia officia corporis optio.',
        'preview': 'https://source.unsplash.com/600x300'
    }

    for i in range(5):
        requests.post('http://localhost:8000/projects', json=data)


print('Seeding project...')

seed_articles()
seed_datasets()
seed_events()
seed_papers()
seed_projects()

print('Seeded')