export class MusicController {
  
  static async searchMusic(query: string) {
    const url = `https://api.vagalume.com.br/search.excerpt?q=${query}`
    const req = await fetch(url)
    const parsed = await req.json()
    
    return parsed.response.docs
  }

  static async getMusic(id: string) {
    const url = `https://api.vagalume.com.br/search.php?musid=${id}`
    const req = await fetch(url)
    const parsed = await req.json()

    const data = {
      id: parsed?.mus[0]?.id ?? '',
      artista: parsed?.art?.name ?? '',
      nameMusica: parsed?.mus[0]?.name,
      contentMusica: parsed?.mus[0]?.text,
    }
    
    return data
  }

}