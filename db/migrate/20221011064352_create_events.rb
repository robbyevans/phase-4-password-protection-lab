class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :title
      t.string :image
      t.string :description
      t.string :location
      t.float :rating

      t.timestamps
    end
  end
end
