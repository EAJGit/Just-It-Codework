playlist = {'Escape': {'Artist': 'Dynatorn', 'Genre': 'New Retro'},
            'Hypersonic': {'Artist': 'Dynatorn', 'Genre': 'New Retro'},
            'Reflections':  {'Artist': 'Cyberwalker', 'Genre': 'New Retro'},
            'Fahrenheit':  {'Artist': 'Neon Nox', 'Genre': 'New Retro'},
           'Underground': {'Artist': 'Wice', 'Genre': 'New Retro'}}
            







def add_song(Title, Artist, Genre):
    playlist[Title] = {"Artist" : Artist, "Genre" : Genre}
add_song('Not of This world', 'Dynatron', 'New Retro')

#print(playlist)

def view_song():
  print(playlist)
view_song()

def update_song(Title, Artist, Genre):
   playlist[Title] = {"Artist" : Artist, "Genre" : Genre}
update_song('Not of This world', 'Dynatron', 'Techno')

view_song()


 
view_song()


def delete_song(title):
   playlist.pop(title)

delete_song('Not of This world')
view_song()

