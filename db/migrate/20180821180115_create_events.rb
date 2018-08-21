class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :title
      t.text :content
      t.datetime :start
      t.datetime :end

      t.timestamps
    end
  end
end
