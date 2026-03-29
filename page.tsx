import { createClient } from '@/utils/supabase/server';

export default async function Notes() {
  // server-side Supabase read
  const supabase = createClient();
  const { data: notes, error } = await supabase.from('notes').select('*');

  if (error) {
    return (
      <div style={{ padding: '1rem', color: 'red' }}>
        <h1>Supabase error</h1>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <main style={{ padding: '1.2rem', fontFamily: 'Inter, sans-serif' }}>
      <h1>Notes</h1>
      {notes && notes.length > 0 ? (
        <ul>
          {notes.map((note: any) => (
            <li key={note.id} style={{ marginBottom: '0.75rem' }}>
              <strong>{note.title || note.subject || 'Untitled'}</strong>
              <pre style={{ margin: '0.4rem 0', whiteSpace: 'pre-wrap' }}>{JSON.stringify(note, null, 2)}</pre>
            </li>
          ))}
        </ul>
      ) : (
        <p>No notes found yet. Upload one through the Upload page first.</p>
      )}
    </main>
  );
}
